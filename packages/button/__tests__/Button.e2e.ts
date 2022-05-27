import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-button--basic&viewMode=story');
    await expect(page).toHaveNoViolations();
  });

  test('is not clickable when disabled', async ({ page }) => {
    await page.goto('?id=components-button--basic&viewMode=story&args=disabled:true');
    const button = await page.locator('.Button').nth(0);

    await expect(button).toBeDisabled();
  });
});
