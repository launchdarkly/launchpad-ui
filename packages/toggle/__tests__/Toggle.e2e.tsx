import { test, expect } from '@playwright/experimental-ct-react';

import { Toggle, type ToggleProps } from '../src/Toggle';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ToggleProps) => <Toggle {...props}>Toggle</Toggle>;

test.describe('Toggle', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });

  test('is accessible in dark mode', async ({ mount, page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
