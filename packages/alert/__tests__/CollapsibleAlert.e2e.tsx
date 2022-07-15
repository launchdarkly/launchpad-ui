import { test, expect } from '@playwright/experimental-ct-react';

import { CollapsibleAlert } from '../src/CollapsibleAlert';
import { AlertKind } from '../src/types';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('CollapsibleAlert', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<CollapsibleAlert message="A test message." kind={AlertKind.WARNING} />);
    await expect(page).toBeAccessible();
  });
});
