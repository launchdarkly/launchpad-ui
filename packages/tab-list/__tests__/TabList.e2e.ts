import { test, expect } from '@playwright/test';

test.describe('TabList', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-tablist--tab-list-example&viewMode=story');
    await expect(page).toHaveNoViolations();
  });
});
