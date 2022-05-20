import type { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

import { getComponents } from '~/data.server';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Remix SSR', () => {
  test('components render', async () => {
    const components = await getComponents();

    for (const component of components) {
      // eslint-disable-next-line no-loop-func
      await test.step(`${component.name} renders`, async () => {
        await page.goto(`/${component.to}`);
        const element = page.locator(`.${component.name}`);
        await expect(element).toBeVisible();
      });
    }
  });
});
