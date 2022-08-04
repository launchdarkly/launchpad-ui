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

  test('can search for an option', async ({ mount, page }) => {
    const options = [
      { name: 'one', value: 'one' },
      { name: 'two', value: 'two' },
      { name: 'three', value: 'three' },
      { name: 'four', value: 'four' },
      { name: 'five', value: 'five' },
    ];
    const component = await mount(createComponent({ options }));

    await component.locator('.Filter-button').click();
    await expect(page.locator('.Menu-search')).toBeVisible();

    const searchInput = page.locator('input.Menu-search-input');
    searchInput.fill('fo');

    const searchResult = page.locator('.Menu-item').nth(0);
    await expect(searchResult).toContainText('four');
  });

  test('can clear an applied filter', async ({ mount, page }) => {
    const options = [
      { name: 'one', value: '1' },
      { name: 'two', value: '2' },
    ];
    const component = await mount(createComponent({ options, isClearable: true }));

    await component.locator('.Filter-button').click();
    await page.locator('.Menu-item').nth(0).click();
    await expect(component).toContainText('author:one');

    await component.locator('.Filter-clear').click();
    await expect(component).toContainText('author:osmo');
  });
});
