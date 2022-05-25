import type { Page, PlaywrightTestConfig } from '@playwright/test';

import path from 'path';

import { devices, expect } from '@playwright/test';

import { axe } from './tests/axe';

expect.extend({
  async toHaveNoViolations(page: Page) {
    const results = await axe(page);
    const pass = results.violations.length === 0;
    if (pass) {
      return {
        message: () => 'passed',
        pass: true,
      };
    } else {
      return {
        message: () => JSON.stringify(results.violations, null, 2),
        pass: false,
      };
    }
  },
});

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
