import type { IconProps } from '../src/Icon';

import { test, expect } from '@playwright/experimental-ct-react';

import { Add } from '../src/Add';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: IconProps) => <Add size="medium" {...props} />;

test.describe('Icon', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
