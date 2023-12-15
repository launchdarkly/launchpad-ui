/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      features: { 'cascade-layers': false },
    }),
    require('@csstools/postcss-global-data')({
      files: [path.resolve(__dirname, './packages/tokens/dist/media-queries.css')],
    }),
    require('postcss-custom-media'),
  ],
};
