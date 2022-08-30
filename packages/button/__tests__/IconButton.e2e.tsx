import type { IconButtonProps } from '../src/IconButton';

import { test, expect } from '@playwright/experimental-ct-react';

import { Close } from '../../icons/src/Close';
import { IconButton } from '../src/IconButton';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: IconButtonProps) => (
  <IconButton aria-label="Close" icon={<Close />} {...props} />
);

test.describe('IconButton', () => {
  test.skip('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
