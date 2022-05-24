import { test, expect } from '@playwright/test';

test.describe('Alert', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-alert--success&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
