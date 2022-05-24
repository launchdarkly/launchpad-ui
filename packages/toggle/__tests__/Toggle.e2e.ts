import { test, expect } from '@playwright/test';

test.describe('Toggle', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-toggle--aria-labelled-by-example&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
