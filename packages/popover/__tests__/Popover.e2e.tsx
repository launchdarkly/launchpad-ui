import { test, expect } from '@playwright/experimental-ct-react';

import { Popover } from '../src/Popover';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Popover', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(
      <Popover isOpen>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    // skip animations
    await page.locator('.Popover-content').evaluate((node) => (node.style.opacity = '1'));
    await expect(page).toBeAccessible();
  });
});
