import { test, expect } from '@playwright/experimental-ct-react';

import { Alert, type AlertProps } from '../src/Alert';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: AlertProps) => <Alert {...props}>Alert</Alert>;

test.describe('Alert', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
