import type { TestRunnerConfig } from '@storybook/test-runner';

import { checkA11y, injectAxe } from 'axe-playwright';

const config: TestRunnerConfig = {
	async preVisit(page) {
		await injectAxe(page);
	},
	async postVisit(page) {
		await checkA11y(page, '#storybook-root', {
			detailedReport: true,
			detailedReportOptions: { html: true },
			// WCAG 2.0/2.1 Level A and AA + general best practices.
			// Stories can opt out of specific rules via the a11y story parameter:
			//   parameters: { a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } } }
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
			},
		});
	},
};

export default config;
