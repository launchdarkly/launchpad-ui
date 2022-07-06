const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const css = require('@parcel/css');
const browserslist = require('browserslist');
const path = require('path');

const tsconfig = require('../tsconfig.json');
const pkg = require('../package.json');

module.exports = {
  core: {
    builder: { name: '@storybook/builder-webpack5' },
  },
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-webpack5',
  features: {
    storyStoreV7: true,
    babelModeV7: true,
  },
  webpackFinal: async (config) => {
    const custom = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...getAliases(),
        },
      },
      optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin({
            minify: CssMinimizerPlugin.parcelCssMinify,
            minimizerOptions: {
              targets: css.browserslistToTargets(browserslist(pkg.browserslist.join(', '))),
              drafts: { nesting: true, customMedia: true },
            },
          }),
        ],
      },
      plugins: [...config.plugins, new MiniCssExtractPlugin()],
    };

    const cssRule = custom.module.rules.findIndex((rule) => rule.test.test('.css'));
    custom.module.rules[cssRule].use.shift();
    custom.module.rules[cssRule].use.unshift(MiniCssExtractPlugin.loader);

    // Keep terser for prod builds
    if (process.env.NODE_ENV === 'production') {
      custom.optimization.minimizer.unshift(`...`);
    }
    return custom;
  },
};

const getAliases = () => {
  const paths = tsconfig.compilerOptions.paths;
  const alias = {};
  Object.keys(paths).forEach((key) => {
    alias[key] = path.resolve(__dirname, `.${paths[key][0]}`);
  });

  return alias;
};
