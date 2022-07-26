import { test, expect } from '@playwright/experimental-ct-react';

import { Popover, type PopoverProps } from '../src/Popover';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: Partial<PopoverProps>) => (
  <Popover {...props}>
    <button>Target</button>
    <span>Content</span>
  </Popover>
);

test.describe('Popover', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent({ isOpen: true }));

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
