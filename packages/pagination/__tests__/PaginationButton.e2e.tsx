import type { PaginationButtonProps } from '../src/PaginationButton';

import { test, expect } from '@playwright/experimental-ct-react';

import { PaginationButton } from '../src/PaginationButton';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props: PaginationButtonProps) => <PaginationButton {...props} />;

test.describe('PaginationButton', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(
      createComponent({
        resourceName: 'resource',
        kind: 'first',
        disabled: false,
        onClick: () => undefined,
      })
    );

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
