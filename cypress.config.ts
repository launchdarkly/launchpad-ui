/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
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
      exclude: ['cypress/**/*.*', 'packages/icons/src/!(Icon.tsx|StatusIcon.tsx|FlairIcon.tsx)'],
    },
  },
});
