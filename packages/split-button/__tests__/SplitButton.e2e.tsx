import { test, expect } from '@playwright/experimental-ct-react';

import { ButtonKind } from '../../button/src/types';
import { Menu } from '../../menu/src/Menu';
import { MenuItem } from '../../menu/src/MenuItem';
import { SplitButton, type SplitButtonProps } from '../src/SplitButton';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: SplitButtonProps) => (
  <SplitButton
    kind={ButtonKind.DEFAULT}
    onClickMainButton={() => undefined}
    onSelect={() => undefined}
    name="test"
    {...props}
  >
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
    </Menu>
  </SplitButton>
);

test.describe('SplitButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
