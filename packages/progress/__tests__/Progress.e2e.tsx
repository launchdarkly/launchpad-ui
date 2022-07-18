import { test, expect } from '@playwright/experimental-ct-react';

import { Progress, type ProgressProps } from '../src/Progress';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ProgressProps) => <Progress {...props} />;

test.describe('Progress', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
