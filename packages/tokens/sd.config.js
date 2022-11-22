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
        },
        {
          destination: 'dark.css',
          format: 'css/variables-themed',
          options: {
            outputReferences: true,
            theme: 'dark',
          },
          filter: (token) => token.dark && token.attributes.category === `color`,
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
  name: 'css/variables-themed',
  formatter: function ({ dictionary, file, options }) {
    const { theme, outputReferences } = options;
    const tokens = dictionary.allTokens
      .map((token) => {
        let value = token[theme];
        if (outputReferences && dictionary.usesReference(token.original[theme])) {
          const refs = dictionary.getReferences(token.original[theme]);
          refs.forEach((ref) => {
            value = `var(--${ref.name})`;
          });
        }
        return `  --${token.name}: ${value};`;
      })
      .join(`\n`);

    return fileHeader({ file }) + `:root[data-theme='${theme}'] {\n` + tokens + '\n}\n';
  },
});
