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

test.describe('Button', () => {
  test('is accessible', async () => {
    await page.goto('?id=components-button--basic&viewMode=story');
    await expect(page).toHaveNoViolations();
  });

  test('is not clickable when disabled', async () => {
    await page.goto('?id=components-button--basic&viewMode=story&args=disabled:true');
    const button = await page.locator('.Button').nth(0);

    await expect(button).toBeDisabled();
  });
});
