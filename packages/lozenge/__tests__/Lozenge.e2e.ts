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

test.describe('Lozenge', () => {
  test('is accessible', async () => {
    await page.goto('?id=components-lozenge--default&viewMode=story');
    await expect(page).toHaveNoViolations();
  });

  test('is focusable when clickable', async () => {
    await page.goto('?id=components-lozenge--default&viewMode=story&args=isClickable:true');
    const lozenge = page.locator('.Lozenge');
    await lozenge.click();
    await expect(lozenge).toBeFocused();
  });
});
