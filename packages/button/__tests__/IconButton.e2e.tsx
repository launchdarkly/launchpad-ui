import { Close } from '@launchpad-ui/icons';
import { test, expect } from '@playwright/experimental-ct-react';

import { IconButton, type IconButtonProps } from '../src/IconButton';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: IconButtonProps) => (
  <IconButton aria-label="Close" icon={<Close />} {...props} />
);

test.describe('IconButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
