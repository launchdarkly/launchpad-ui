import path from 'path';

import { type PlaywrightTestConfig, devices, expect } from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';
import matchers from 'expect-axe-playwright';

import parcelCssPlugin from './parcel-css-plugin';

expect.extend(matchers);

const config: PlaywrightTestConfig = {
  testDir: path.resolve(),
  testMatch: /.*\.e2e\.tsx/,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  workers: process.env.CI ? 2 : undefined,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  use: {
    axeOptions: {
      rules: {
        region: { enabled: false },
      },
    },
    ctViteConfig: { plugins: [react(), parcelCssPlugin()] },
  },
};

export default config;
