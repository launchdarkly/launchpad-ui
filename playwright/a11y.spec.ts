import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.describe('Storybook a11y', async () => {
	const stories: string[] = require('./stories.json');
	const themes = ['default', 'dark'];
	const snapshots = stories.filter(
		(story) => story.startsWith('components') && !story.includes('icons'),
	);

	for (const theme of themes) {
		for (const story of stories) {
			test(`${theme}: ${story}`, async ({ page }) => {
				await page.emulateMedia({ reducedMotion: 'reduce' });

				await page.goto(
					`${process.env.STORYBOOK_URL}iframe.html?args=&globals=theme:${theme}&id=${story}&viewMode=story`,
				);

				await page.addScriptTag({
					content: `
          async function __getContext(storyId) {
            return globalThis.__STORYBOOK_STORY_STORE__.loadStory({ storyId });
          }
        `,
				});

				// @ts-ignore
				await page.evaluate(() => window.__STORYBOOK_PREVIEW__.ready());

				const storyContext = await page.evaluate(
					// @ts-ignore
					({ storyId }) => globalThis.__getContext(storyId),
					{
						storyId: story,
					},
				);

				// Skip stories that disable a11y
				if (storyContext.parameters?.a11y?.disable) {
					return;
				}

				const root = page.locator('#storybook-root');
				await root.waitFor();

				await page.waitForLoadState('domcontentloaded');

				const portal = page.locator('[data-test-id="portal"]');

				if ((await portal.count()) > 0) {
					const content = page
						.locator('[data-test-id="portal"] [style*="opacity"]:not([role="presentation"])')
						.first();

					await content.waitFor();

					await expect
						.poll(() => content.evaluate((node) => getComputedStyle(node).opacity))
						.toBe('1');
				}

				const accessibilityScanResults = await new AxeBuilder({ page })
					.options({
						runOnly: {
							type: 'tag',
							values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
						},
						rules: {
							'landmark-unique': {
								enabled: false,
							},
							'landmark-one-main': {
								enabled: false,
							},
							'page-has-heading-one': {
								enabled: false,
							},
							region: {
								enabled: false,
							},
							'scrollable-region-focusable': {
								enabled: false,
							},
							...(storyContext.parameters?.a11y?.options?.rules || {}),
						},
					})
					.include('#storybook-root')
					.include('[data-test-id="portal"]')
					.include('[data-rac]')
					.include('[data-react-aria-top-layer]')
					.exclude('[data-a11y-ignore="aria-hidden-focus"]')
					.analyze();

				await expect(accessibilityScanResults.violations).toEqual([]);
			});
		}
	}

	for (const story of snapshots) {
		test(`aria snapshot: ${story}`, async ({ page }) => {
			await page.goto(`${process.env.STORYBOOK_URL}iframe.html?args=&id=${story}&viewMode=story`);

			// @ts-ignore
			await page.evaluate(() => window.__STORYBOOK_PREVIEW__.ready());
			const root = page.locator('#storybook-root');
			await root.waitFor();
			await page.waitForLoadState('domcontentloaded');

			await expect(page.locator('body')).toMatchAriaSnapshot({
				name: `aria-${story}.yml`,
			});
		});
	}
});
