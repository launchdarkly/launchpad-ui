import { test, expect } from '@playwright/experimental-ct-react';

import { Toggle } from '../src/Toggle';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Toggle', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Toggle>Toggle</Toggle>);
    await expect(page).toBeAccessible();
  });

  test('is accessible in dark mode', async ({ mount, page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await mount(<Toggle>Toggle</Toggle>);
    await expect(page).toBeAccessible();
  });
});
