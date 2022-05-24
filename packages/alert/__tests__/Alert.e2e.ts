import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

test.describe('Alert', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-alert--success&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });
});
