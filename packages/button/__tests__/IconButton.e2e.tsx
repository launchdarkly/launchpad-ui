import { test, expect } from '@playwright/experimental-ct-react';

import { Close } from '../../icons/src/Close';
import { IconButton } from '../src/IconButton';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('IconButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(<IconButton aria-label="Close" icon={<Close />} />);

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
