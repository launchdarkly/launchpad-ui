const path = require('path');
const tsconfig = require('../tsconfig.json');
const fs = require('fs');
const { mergeConfig } = require('vite');

module.exports = {
  features: {
    // https://github.com/storybookjs/storybook/issues/19094
    storyStoreV7: false,
  },
  docs: {
    // https://github.com/storybookjs/builder-vite/issues/492
    docsPage: false,
  },
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-highlight',
    '@storybook/addon-interactions',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    'storybook-addon-pseudo-states',
    //'@etchteam/storybook-addon-status',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: { fastRefresh: true, strictMode: true },
  },
  staticDirs: ['.'],
  env: (config) => {
    const packageStatuses = getPackageStatusEnvVars();

    return { ...config, ...packageStatuses };
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/addon-a11y/manager',
          '@storybook/addon-actions/manager.js',
          '@storybook/addon-backgrounds/manager',
          '@storybook/addon-docs/preview.js',
          '@storybook/addon-highlight/preview.js',
          '@storybook/addon-interactions/manager.js',
          '@storybook/addon-measure/manager',
          '@storybook/addon-outline/manager',
          '@storybook/addon-toolbars/manager',
          '@storybook/addon-viewport/manager',
        ],
      },
    });
  },
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
