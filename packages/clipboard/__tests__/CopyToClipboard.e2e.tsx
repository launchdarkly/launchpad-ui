import { test, expect } from '@playwright/experimental-ct-react';

import { CopyToClipboard } from '../src/CopyToClipboard';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('CopyToClipboard', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(
      <CopyToClipboard text="Copy content">
        <span>Copy content</span>
      </CopyToClipboard>
    );
    await expect(page).toBeAccessible();
  });
});
