import JsonToTS from 'json-to-ts';
import StyleDictionary from 'style-dictionary-utils';
import Color from 'tinycolor2';
import yaml from 'yaml';

type NullableTokens = {
  [key: string]: string | NullableTokens | null;
};

StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter({ dictionary }) {
    return dictionary.allProperties
      .map((prop) => {
        const { attributes, value } = prop;
        const size = attributes?.type;
        return `@custom-media --${size} screen and (min-width: ${value});`;
      })
      .join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'css/theme-variables',
  formatter: function ({ dictionary, file }) {
    const darkTokens = themeTokens(dictionary, 'dark');
    const defaultTokens = themeTokens(dictionary);

    const darkColorCSSVariables = `[data-theme='dark'] {\n${darkTokens}\n}\n`;
    const defaultColorCSSVariables = `:root, [data-theme='default'] {\n${defaultTokens}\n}\n`;

    return `${StyleDictionary.formatHelpers.fileHeader({
      file,
    })}${defaultColorCSSVariables}\n${darkColorCSSVariables}`;
  },
});

StyleDictionary.registerFormat({
  name: 'json/nested/contract',
  formatter({ dictionary }) {
    return JSON.stringify(minifyDictionary(dictionary.tokens), null, 2) + '\n';
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/accurate-module-declarations',
  formatter({ dictionary }) {
    return (
      'declare const root: RootObject\n' +
      'export default root\n' +
      JsonToTS(StyleDictionary.formatHelpers.minifyDictionary(dictionary.tokens)).join('\n')
    );
  },
});

StyleDictionary.registerTransform({
  type: 'attribute',
  name: 'dark/rgb',
  matcher: (token) => token.dark,
  transformer: (token) => {
    token.dark = Color(token.dark).toRgbString();
    return token;
  },
});

const myStyleDictionary = StyleDictionary.extend({
  parsers: [
    {
      pattern: /\.yaml$/,
      parse: ({ contents }) => yaml.parse(contents),
    },
  ],
  source: [`src/**/*.yaml`],
  platforms: {
    css: {
      prefix: 'lp',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/rgb',
        'dark/rgb',
      ],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          filter: (token) => token.attributes?.category !== `color`,
        },
        {
          destination: 'themes.css',
          format: 'css/theme-variables',
          options: {
            outputReferences: true,
          },
          filter: (token) => token.attributes?.category === `color`,
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/esm',
          destination: 'index.es.js',
        },
        {
          format: 'typescript/accurate-module-declarations',
          destination: 'index.d.ts',
        },
        {
          format: 'javascript/commonJs',
          destination: 'index.js',
        },
      ],
    },
    'media-query': {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: `media-queries.css`,
          format: 'custom/format/custom-media',
          filter: { attributes: { category: 'viewport' } },
        },
      ],
    },
    json: {
      buildPath: 'dist/',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/rgb',
      ],
      files: [
        {
          format: 'json/nested/contract',
          destination: 'contract.json',
        },
      ],
    },
  },
});

const minifyDictionary = (tokens: StyleDictionary.TransformedTokens) => {
  if (typeof tokens !== 'object' || Array.isArray(tokens)) {
    return tokens;
  }

  const dict: NullableTokens = {};

  if (Object.prototype.hasOwnProperty.call(tokens, 'value')) {
    let variable = '';
    const path: StyleDictionary.TransformedToken['path'] = tokens.path.filter(
      (item: string) => item !== ' '
    );
    path.forEach((item, index) => {
      variable += item;
      variable += index !== path.length - 1 ? '-' : '';
    });

    return variable;
  } else {
    for (const name in tokens) {
      if (Object.prototype.hasOwnProperty.call(tokens, name)) {
        dict[name] = minifyDictionary(tokens[name]);
      }
    }
  }
  return dict;
};

const themeTokens = (dictionary: StyleDictionary.Dictionary, theme = '') =>
  dictionary.allTokens
    .map((token) => {
      let value = token[theme] || token.value;
      const original = token.original[theme] || token.original.value;
      if (dictionary.usesReference(original)) {
        const refs = dictionary.getReferences(original);
        refs.forEach((ref) => {
          value = `var(--${ref.name})`;
        });
      }
      return `  --${token.name}: ${value};`;
    })
    .join(`\n`);

myStyleDictionary.buildAllPlatforms();
