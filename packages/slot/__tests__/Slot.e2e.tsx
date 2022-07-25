import { test, expect } from '@playwright/experimental-ct-react';

import { Slot, type SlotProps } from '../src/Slot';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: SlotProps) => <Slot {...props}>An important message</Slot>;

test.describe('Slot', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
