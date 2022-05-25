import { test, expect } from '@playwright/test';

// TODO: Fix story to pass
test.skip('Toggle', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-toggle--aria-labelled-by-example&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
