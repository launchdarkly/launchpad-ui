import { test, expect } from '@playwright/experimental-ct-react';

import { Chip, type ChipProps } from '../src/Chip';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ChipProps) => <Chip {...props}>Chip</Chip>;

test.describe('Chip', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
