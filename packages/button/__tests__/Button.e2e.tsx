import { test, expect } from '@playwright/experimental-ct-react';

import { Button, type ButtonProps } from '../src/Button';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ButtonProps) => <Button {...props}>Button</Button>;

test.describe('Button', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
