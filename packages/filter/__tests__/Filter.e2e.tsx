import type { FilterProps } from '../src/Filter';

import { test, expect } from '@playwright/experimental-ct-react';

import { FilterTestWrapper } from './FilterTestWrapper';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: Partial<FilterProps>) => <FilterTestWrapper {...props} />;

test.describe('Filter', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });

  test('can select an option', async ({ mount, page }) => {
    const options = [
      { name: 'one', value: '1' },
      { name: 'two', value: '2' },
    ];
    const component = await mount(createComponent({ options }));

    await component.locator('.Filter-button').click();
    await page.locator('.Menu-item').nth(0).click();

    await expect(component).toContainText('author:one');
  });

  test.skip('can search for an option', async ({ mount }) => {
    const component = await mount(createComponent());
    await expect(component).toBeVisible();
  });
});
