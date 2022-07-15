import { test, expect } from '@playwright/experimental-ct-react';

import { Add } from '../src/Add';
import { IconSize } from '../src/types';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Icon', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Add size={IconSize.MEDIUM} />);
    await expect(page).toBeAccessible();
  });
});
