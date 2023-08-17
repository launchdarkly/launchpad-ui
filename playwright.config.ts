import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 5 * 60 * 1000,
  testDir: 'playwright',
  reporter: process.env.CI ? 'blob' : 'html',
  globalSetup: require.resolve('./playwright/global-setup'),
  globalTeardown: require.resolve('./playwright/global-teardown'),
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
  ],
});
