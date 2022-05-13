import { PlaywrightTestConfig, devices } from '@playwright/test';
import path from 'path';

const config: PlaywrightTestConfig = {
  testDir: path.resolve(),
  testMatch: /.*\.e2e\.ts/,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  workers: process.env.CI ? 2 : undefined,
  use: {
    baseURL: 'http://localhost:3000/iframe.html',
    trace: 'on-first-retry',
  },
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
