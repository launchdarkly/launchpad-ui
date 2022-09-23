/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      return config;
    },
  },
  video: false,
  screenshotOnRunFailure: false,
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', 'packages/icons/src/!(Icon.tsx|KindIcon.tsx)'],
    },
  },
});
