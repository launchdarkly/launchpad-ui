import type { SplitButtonProps } from '../src';

import { test, expect } from '@playwright/experimental-ct-react';

import { Menu } from '../../menu/src/Menu';
import { MenuItem } from '../../menu/src/MenuItem';
import {
  SplitButton,
  SplitButtonDropdown,
  SplitButtonDropdownButton,
  SplitButtonMainButton,
} from '../src';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: SplitButtonProps) => (
  <SplitButton {...props}>
    <SplitButtonMainButton>Save changes</SplitButtonMainButton>
    <SplitButtonDropdown>
      <SplitButtonDropdownButton />
      <Menu>
        <MenuItem>Save changes</MenuItem>
      </Menu>
    </SplitButtonDropdown>
  </SplitButton>
);

test.describe('SplitButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
