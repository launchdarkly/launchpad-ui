import { test, expect } from '@playwright/experimental-ct-react';

import { AlertKind } from '../../alert/src/types';
import { Banner } from '../src/Banner';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Banner', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Banner kind={AlertKind.INFO}>Banner</Banner>);
    await expect(page).toBeAccessible();
  });
});
