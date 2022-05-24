import { test, expect } from '@playwright/test';

import { axe } from '../../../tests/axe';

test.describe('Toggle', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-toggle--aria-labelled-by-example&viewMode=story');
    const results = await axe(page);
    await expect(results.violations.length).toBe(0);
  });
});
