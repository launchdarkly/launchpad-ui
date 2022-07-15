import { test, expect } from '@playwright/experimental-ct-react';

import { Alert } from '../src/Alert';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Alert', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Alert>Alert</Alert>);
    await expect(page).toBeAccessible();
  });
});
