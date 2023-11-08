/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('@csstools/postcss-global-data')({
      files: ['packages/tokens/dist/media-queries.css'],
    }),
    require('postcss-custom-media'),
  ],
};
