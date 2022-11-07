const path = require('path');
const fs = require('fs');

const fg = require('fast-glob');
const turbosnap = require('vite-plugin-turbosnap');

const tsconfig = require('../tsconfig.json');

const getStories = () =>
  fg.sync([path.resolve(__dirname, `../packages/**/stories/*.stories.tsx`), '!**/node_modules']);

module.exports = {
  stories: async () => [...getStories()],
  features: {
    /*
     * CSS order issues occur when async chunks are used
     * See: https://github.com/vitejs/vite/pull/9278
     * TODO: remove once Vite has the fix released
     */
    storyStoreV7: false,
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    //'@etchteam/storybook-addon-status',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: { fastRefresh: true },
  },
  staticDirs: ['.'],
  env: (config) => {
    const packageStatuses = getPackageStatusEnvVars();

    return { ...config, ...packageStatuses };
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.plugins.push(turbosnap({ rootDir: config.root }));
    }

    return config;
  },
  docs: {
    docsPage: 'automatic',
    defaultName: 'Docs',
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
