import type { StorybookConfig } from '@storybook/react-vite';

import path from 'path';
import fs from 'fs';
import fg from 'fast-glob';
import stylexPlugin from '@stylexjs/rollup-plugin';
import { mergeConfig } from 'vite';
import turbosnap from 'vite-plugin-turbosnap';

import tsconfig from '../tsconfig.json';

const getStories = () =>
  fg.sync([
    path.resolve(__dirname, `../packages/**/stories/*.stories.{mdx,tsx}`),
    '!**/node_modules',
  ]);

const config: StorybookConfig = {
  stories: [...getStories()],
  features: {
    /*
     * CSS order issues occur when async chunks are used
     * See: https://github.com/vitejs/vite/pull/9278
     * TODO: remove once Vite has the fix released
     */
    storyStoreV7: false,
    buildStoriesJson: true,
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-designs',
  ],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
  },
  staticDirs: [
    '.',
    { from: '../packages/icons/src/img', to: '/static' },
    { from: '../packages/card/src/img', to: '/static' },
  ],
  env: (config) => {
    const packageStatuses = getPackageStatusEnvVars();

    return { ...config, ...packageStatuses };
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(
      config,
      configType === 'PRODUCTION'
        ? {
            plugins: [turbosnap({ rootDir: config.root || process.cwd() })],
            build: {
              rollupOptions: {
                plugins: [
                  stylexPlugin({
                    // Required for CSS variable support
                    unstable_moduleResolution: {
                      type: 'commonJS',
                      rootDir: __dirname,
                    },
                  }),
                ],
              },
            },
          }
        : {}
    );
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
  previewHead: (head) => `
    ${head}
    ${process.env.NODE_ENV === 'production' ? '<link href="./stylex.css" rel="stylesheet" />' : ''}
  `,
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
