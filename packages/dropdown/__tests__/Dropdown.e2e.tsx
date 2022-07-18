import { test, expect } from '@playwright/experimental-ct-react';

import { Dropdown, type DropdownProps } from '../src/Dropdown';
import { DropdownButton } from '../src/DropdownButton';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: DropdownProps<string>) => (
  <Dropdown {...props}>
    <DropdownButton>Target</DropdownButton>
    <div>content</div>
  </Dropdown>
);

test.describe('Dropdown', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await component.locator('.Button').click();
    // skip animations
    await page.locator('.Popover-content').evaluate((node) => (node.style.opacity = '1'));

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
