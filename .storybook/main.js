const path = require('path');
const tsconfig = require('../tsconfig.json');

module.exports = {
  core: {
    builder: { name: '@storybook/builder-webpack5' },
  },
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-webpack5',
  features: {
    storyStoreV7: true,
    babelModeV7: true,
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...getAliases(),
      },
    },
  }),
};

const getAliases = () => {
  const paths = tsconfig.compilerOptions.paths;
  const alias = {};
  Object.keys(paths).forEach((key) => {
    alias[key] = path.resolve(__dirname, `.${paths[key][0]}`);
  });

  return alias;
};
