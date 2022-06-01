/* eslint-disable @typescript-eslint/no-var-requires */
const StyleDictionary = require('style-dictionary');
const yaml = require('yaml');

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
