import type { Page } from '@playwright/test';

import { test, expect } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Progress', () => {
  test('is accessible', async () => {
    await page.goto('?id=components-progress--default&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
