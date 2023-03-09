/* eslint-disable @typescript-eslint/no-var-requires */
const StyleDictionary = require('style-dictionary');
const yaml = require('yaml');

const { fileHeader } = StyleDictionary.formatHelpers;

module.exports = {
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
      ],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          filter: (token) => token.filePath !== 'src/color-aliases.yaml',
        },
        {
          destination: 'themes.css',
          format: 'css/theme-variables',
          options: {
            outputReferences: true,
          },
          filter: (token) =>
            token.filePath === 'src/color-aliases.yaml' && token.attributes.category === `color`,
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'index.es.js',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'index.d.ts',
        },
        {
          format: 'javascript/module',
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
      buildPath: 'stories/',
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
          format: 'json/nested',
          destination: 'tokens.json',
        },
      ],
    },
  },
};

StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter(dictionary) {
    return dictionary.allProperties
      .map((prop) => {
        const { attributes, value } = prop;
        const size = attributes.type;
        return `@custom-media --${size} screen and (min-width: ${value});`;
      })
      .join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'css/theme-variables',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    const darkTokens = dictionary.allTokens
      .map((token) => {
        let value = token.original.dark || token.original.value;
        if (outputReferences && dictionary.usesReference(value)) {
          const refs = dictionary.getReferences(value);
          refs.forEach((ref) => {
            value = `var(--${ref.name})`;
          });
        }
        return `  --${token.name}: ${value};`;
      })
      .join(`\n`);

    const defaultTokens = dictionary.allTokens
      .map((token) => {
        let value = token.original.value;
        if (outputReferences && dictionary.usesReference(value)) {
          const refs = dictionary.getReferences(value);
          refs.forEach((ref) => {
            value = `var(--${ref.name})`;
          });
        }
        return `  --${token.name}: ${value};`;
      })
      .join(`\n`);

    const darkColorCSSVariables = `[data-theme='dark'] {\n${darkTokens}\n}\n`;

    const defaultColorCSSVariables = `[data-theme='default'] {\n${defaultTokens}\n}\n`;

    return `${fileHeader({
      file,
    })}${defaultColorCSSVariables}\n${darkColorCSSVariables}`;
  },
});
