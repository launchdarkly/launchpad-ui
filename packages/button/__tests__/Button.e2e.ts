import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('is not clickable when disabled', async ({ page }) => {
    await page.goto('?id=components-button--basic&viewMode=story&args=disabled:true');
    const button = await page.locator('.Button').nth(0);

    await expect(button).toBeDisabled();
  });
});
