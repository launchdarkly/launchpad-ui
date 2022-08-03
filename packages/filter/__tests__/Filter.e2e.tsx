import { test, expect } from '@playwright/experimental-ct-react';

import { Filter, type FilterProps } from '../src/Filter';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: Partial<FilterProps>) => (
  <Filter name="author" description="osmo" options={[]} {...props} />
);

test.describe('Filter', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
