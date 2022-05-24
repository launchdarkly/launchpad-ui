import type { Page } from '@playwright/test';

import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Toggle', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-toggle--aria-labelled-by-example&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });
});
