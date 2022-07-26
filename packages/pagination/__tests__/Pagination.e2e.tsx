import { test, expect } from '@playwright/experimental-ct-react';

import { Pagination, type PaginationProps } from '../src/Pagination';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: PaginationProps) => (
  <Pagination {...props}>An important message</Pagination>
);

test.describe('Pagination', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
