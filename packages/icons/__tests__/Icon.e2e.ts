import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

test.describe('Icon', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-icon--default&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });
});
