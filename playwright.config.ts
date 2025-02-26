import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	timeout: 5 * 60 * 1000,
	testDir: 'playwright',
	reporter: process.env.CI ? 'blob' : 'html',
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 2 : undefined,
	globalSetup: require.resolve('./playwright/global-setup'),
	globalTeardown: require.resolve('./playwright/global-teardown'),
	projects: [
		{
			name: 'chromium',
			use: devices['Desktop Chrome'],
		},
	],
	use: {
		screenshot: 'only-on-failure',
		testIdAttribute: 'data-test-id',
	},
	expect: {
		toMatchAriaSnapshot: {
			pathTemplate: '{testDir}/__snapshots__/{arg}{ext}',
		},
	},
	...(!process.env.CI && {
		webServer: {
			command: 'pnpm storybook:build && pnpm dlx http-server storybook-static -s',
			url: 'http://127.0.0.1:8080',
		},
	}),
});
