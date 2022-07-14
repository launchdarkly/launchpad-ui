import path from 'path';

import { type PlaywrightTestConfig, devices } from '@playwright/experimental-ct-react';

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
};

export default config;
