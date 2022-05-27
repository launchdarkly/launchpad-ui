import { test, expect } from '@playwright/test';

test.describe('Icon', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-icon--default&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
