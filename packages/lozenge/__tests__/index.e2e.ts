import { test, expect } from '@playwright/test';

test('is focusable when clickable', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?id=components-lozenge--default&viewMode=story&args=isClickable:true'
  );
  const lozenge = page.locator('.Lozenge');
  await lozenge.click();
  await expect(lozenge).toBeFocused();
});
