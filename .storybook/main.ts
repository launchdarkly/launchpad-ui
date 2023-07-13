import type { StorybookConfig } from '@storybook/react-vite';

import path from 'path';
import fs from 'fs';
import fg from 'fast-glob';
import turbosnap from 'vite-plugin-turbosnap';

import tsconfig from '../tsconfig.json';

const getStories = () =>
  fg.sync([path.resolve(__dirname, `../packages/**/stories/*.stories.tsx`), '!**/node_modules']);

const config: StorybookConfig = {
  stories: [...getStories()],
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
    '@etchteam/storybook-addon-status',
  ],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['.', { from: '../packages/icons/src/img', to: '/static' }],
  env: (config) => {
    const packageStatuses = getPackageStatusEnvVars();

    return { ...config, ...packageStatuses };
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.plugins?.push(turbosnap({ rootDir: config.root || process.cwd() }));
    }

    return config;
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
};

const getPackageStatusEnvVars = () => {
  const paths = tsconfig.compilerOptions.paths;
  const statuses = {};

  Object.keys(paths).forEach((key) => {
    const filepath = path.resolve(__dirname, `.${paths[key][0]}/../package.json`);
    const contents = fs.readFileSync(filepath);
    const { status } = JSON.parse(contents.toString());
    const statusKey = key.replace('@launchpad-ui/', '').replace(/-/g, '_').toUpperCase();
    statuses[`STORYBOOK_PACKAGE_STATUS__${statusKey}`] = status;
  });

  return statuses;
};

export default config;
