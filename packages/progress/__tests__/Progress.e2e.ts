import { test, expect } from '@playwright/test';

test.describe('Progress', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-progress--default&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
