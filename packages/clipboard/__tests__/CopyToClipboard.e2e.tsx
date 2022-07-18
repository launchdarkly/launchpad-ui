import { test, expect } from '@playwright/experimental-ct-react';

import { CopyToClipboard, type CopyToClipboardProps } from '../src/CopyToClipboard';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: CopyToClipboardProps) => (
  <CopyToClipboard text="Copy content" {...props}>
    <span>Copy content</span>
  </CopyToClipboard>
);

test.describe('CopyToClipboard', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
