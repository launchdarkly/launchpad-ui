import type { UploadButtonProps } from '../src';

import { test, expect } from '@playwright/experimental-ct-react';

import { UploadButton } from '../src';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: UploadButtonProps) => (
  <UploadButton maxSize={10000} id="test" onSelect={() => undefined} {...props}>
    UploadButton
  </UploadButton>
);

test.describe('UploadButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
