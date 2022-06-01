/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({ browsers: 'last 2 versions, not dead, not IE 11' }),
  ],
};
