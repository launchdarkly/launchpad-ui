import { test, expect } from '@playwright/experimental-ct-react';

import { CopyCodeButton, type CopyCodeButtonProps } from '../src/CopyCodeButton';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: CopyCodeButtonProps) => (
  <CopyCodeButton {...props}>Copy content</CopyCodeButton>
);

test.describe('CopyCodeButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
