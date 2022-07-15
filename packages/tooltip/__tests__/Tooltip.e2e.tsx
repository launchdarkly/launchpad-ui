import { test, expect } from '@playwright/experimental-ct-react';

import { Tooltip } from '../src/Tooltip';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Tooltip', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(
      <Tooltip isOpen>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );

    // skip animations
    await page.locator('.Popover-content').evaluate((node) => (node.style.opacity = '1'));
    await expect(page).toBeAccessible();
  });
});
