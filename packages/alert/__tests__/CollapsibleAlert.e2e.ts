import { test, expect } from '@playwright/test';

test.describe('CollapsibleAlert', () => {
  test('is keyboard accessible', async ({ page }) => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');

    await page.press('.Alert', 'Tab');
    await page.press('.CollapsibleAlert-button', 'Enter');
    const table = await page.locator('.Table');
    await expect(table).toBeVisible();
  });
});
