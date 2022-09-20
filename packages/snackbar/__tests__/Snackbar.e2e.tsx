import { test, expect } from '@playwright/experimental-ct-react';

import { Snackbar, type SnackbarProps } from '../src/Snackbar';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: SnackbarProps) => (
  <Snackbar onDismiss={() => undefined} kind="info" description="Hi there" {...props} />
);

test.describe('Snackbar', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
