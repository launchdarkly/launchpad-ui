import { test, expect } from '@playwright/experimental-ct-react';

import { Progress } from '../src/Progress';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Progress', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Progress />);
    await expect(page).toBeAccessible();
  });
});
