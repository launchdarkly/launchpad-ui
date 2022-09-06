const path = require('path');
const tsconfig = require('../tsconfig.json');
const fs = require('fs');
const fg = require('fast-glob');

const getStories = () =>
  fg.sync([path.resolve(__dirname, `../packages/**/stories/*.stories.tsx`), '!**/node_modules']);

module.exports = {
  stories: async () => [...getStories()],
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
