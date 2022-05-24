import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

test.describe('Lozenge', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-lozenge--default&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });

  test('is focusable when clickable', async ({ page }) => {
    await page.goto('?id=components-lozenge--default&viewMode=story&args=isClickable:true');
    const lozenge = page.locator('.Lozenge');
    await lozenge.click();
    await expect(lozenge).toBeFocused();
  });
});
