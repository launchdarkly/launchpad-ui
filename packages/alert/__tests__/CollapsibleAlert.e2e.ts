import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

test.describe('CollapsibleAlert', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });

  test('is keyboard accessible', async ({ page }) => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');

    await page.press('.Alert', 'Tab');
    await page.press('.CollapsibleAlert-button', 'Enter');
    const table = await page.locator('.Table');
    await expect(table).toBeVisible();
  });
});
