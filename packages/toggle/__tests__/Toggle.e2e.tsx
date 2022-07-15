import { test, expect } from '@playwright/experimental-ct-react';

import { Toggle } from '../src/Toggle';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Toggle', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Toggle>Toggle</Toggle>);
    await expect(page).toBeAccessible();
  });
});
