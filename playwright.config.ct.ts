import path from 'path';

import { type PlaywrightTestConfig, devices, expect } from '@playwright/experimental-ct-react';
import matchers from 'expect-axe-playwright';

expect.extend(matchers);

const config: PlaywrightTestConfig = {
  testDir: path.resolve(),
  testMatch: /\.e2e\.tsx/,
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
  },
};

export default config;
