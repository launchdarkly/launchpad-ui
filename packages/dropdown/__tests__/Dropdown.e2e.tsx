import { test, expect } from '@playwright/experimental-ct-react';

import { Dropdown } from '../src/Dropdown';
import { DropdownButton } from '../src/DropdownButton';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Dropdown', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <div>content</div>
      </Dropdown>
    );

    await component.locator('.Button').click();
    // skip animations
    await page.locator('.Popover-content').evaluate((node) => (node.style.opacity = '1'));
    await expect(page).toBeAccessible();
  });
});
