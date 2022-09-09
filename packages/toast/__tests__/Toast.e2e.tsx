import { test, expect } from '@playwright/experimental-ct-react';

import { Toast, type ToastProps } from '../src/Toast';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ToastProps) => <Toast {...props}>An important message</Toast>;

test.describe('Toast', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
