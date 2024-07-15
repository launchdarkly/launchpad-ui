import { expect, test } from '@playwright/test';

test.describe('Toast', () => {
	test('closes with reduced motion', async ({ page }) => {
		await page.emulateMedia({ reducedMotion: 'reduce' });

		await page.goto(
			`${process.env.STORYBOOK_URL}iframe.html?args=&globals=&id=components-status-toast--example&viewMode=story`,
		);

		// @ts-ignore
		await page.evaluate(() => window.__STORYBOOK_PREVIEW__.ready());

		const root = page.locator('#storybook-root');
		await root.waitFor();

		await page.waitForLoadState('domcontentloaded');

		await expect(page.getByText('A success toast!')).toBeVisible();
		await page.getByLabel('Close').click();
		await expect(page.getByText('A success toast!')).not.toBeVisible();
	});

	test('auto-dismisses with reduced motion', async ({ page }) => {
		await page.emulateMedia({ reducedMotion: 'reduce' });
		await page.clock.install({ time: new Date() });

		await page.goto(
			`${process.env.STORYBOOK_URL}iframe.html?args=&globals=&id=components-status-toast--example&viewMode=story`,
		);

		// @ts-ignore
		await page.evaluate(() => window.__STORYBOOK_PREVIEW__.ready());

		const root = page.locator('#storybook-root');
		await root.waitFor();

		await page.waitForLoadState('domcontentloaded');

		await expect(page.getByText('A success toast!')).toBeVisible();
		await page.clock.fastForward(6000);
		await expect(page.getByText('A success toast!')).not.toBeVisible();
	});
});
