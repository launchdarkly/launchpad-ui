import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

test.describe('Button', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-button--basic&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });

  test('is not clickable when disabled', async ({ page }) => {
    await page.goto('?id=components-button--basic&viewMode=story&args=disabled:true');
    const button = await page.locator('.Button').nth(0);

    await expect(button).toBeDisabled();
  });
});
