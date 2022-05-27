import { test, expect } from '@playwright/test';

test.describe('Lozenge', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-lozenge--default&viewMode=story');
    await expect(page).toHaveNoViolations();
  });

  test('is focusable when clickable', async ({ page }) => {
    await page.goto('?id=components-lozenge--default&viewMode=story&args=isClickable:true');
    const lozenge = page.locator('.Lozenge');
    await lozenge.click();
    await expect(lozenge).toBeFocused();
  });
});
