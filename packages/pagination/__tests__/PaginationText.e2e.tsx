import type { PaginationTextProps } from '../src/PaginationText';

import { test, expect } from '@playwright/experimental-ct-react';

import { PaginationText } from '../src/PaginationText';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props: PaginationTextProps) => <PaginationText {...props} />;

test.describe('PaginationText', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(
      createComponent({
        currentOffset: 0,
        pageSize: 2,
        isReady: true,
        totalCount: 4,
      })
    );

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
