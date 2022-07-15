const path = require('path');
const tsconfig = require('../tsconfig.json');
const fs = require('fs');

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
    '@etchteam/storybook-addon-status',
  ],
  framework: '@storybook/react-webpack5',
  features: {
    storyStoreV7: true,
    babelModeV7: true,
  },
  env: (config) => {
    const packageStatuses = getPackageStatusEnvVars();

    return { ...config, ...packageStatuses };
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

const getPackageStatusEnvVars = () => {
  const paths = tsconfig.compilerOptions.paths;
  const statuses = {};

  Object.keys(paths).forEach((key) => {
    const filepath = path.resolve(__dirname, `.${paths[key][0]}/../package.json`);
    const contents = fs.readFileSync(filepath);
    const { status } = JSON.parse(contents);
    const statusKey = key.replace('@launchpad-ui/', '').replace(/-/g, '_').toUpperCase();
    statuses[`PACKAGE_STATUS__${statusKey}`] = status;
  });

  return statuses;
};
