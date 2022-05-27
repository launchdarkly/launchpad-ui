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

test.describe('CollapsibleAlert', () => {
  test('is accessible', async () => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');
    await expect(page).toHaveNoViolations();
  });

  test('is keyboard accessible', async () => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');

    await page.press('.Alert', 'Tab');
    await page.press('.CollapsibleAlert-button', 'Enter');
    const table = await page.locator('.Table');
    await expect(table).toBeVisible();
  });
});
