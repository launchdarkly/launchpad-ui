import { test, expect } from '@playwright/experimental-ct-react';

import { Menu, type MenuProps } from '../src/Menu';
import { MenuDivider } from '../src/MenuDivider';
import { MenuItem } from '../src/MenuItem';
import { MenuSearch } from '../src/MenuSearch';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: MenuProps<string>) => (
  <Menu<string> {...props}>
    <MenuSearch />
    <MenuItem item="one">one</MenuItem>
    <MenuItem item="two" disabled>
      two
    </MenuItem>
    <MenuItem item="three">three</MenuItem>
    <MenuDivider />
    <MenuItem item="four">four</MenuItem>
  </Menu>
);

test.describe('Menu', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
