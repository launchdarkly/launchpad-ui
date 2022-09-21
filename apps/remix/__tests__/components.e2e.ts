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

        // convert pascalcase component name to dashcase for test ID
        const dashify = (str: string) =>
          str
            .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
            .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

        const element = page.locator(`[data-test-id=${dashify(component.name)}]`);

        await expect(element).toBeVisible();
      });
    }
  });
});
