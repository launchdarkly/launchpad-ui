import { test, expect } from '@playwright/experimental-ct-react';

import { Lozenge, type LozengeProps } from '../src/Lozenge';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: LozengeProps) => <Lozenge {...props}>Lozenge</Lozenge>;

test.describe('Lozenge', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
