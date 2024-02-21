import type { Page } from '@playwright/test';

import { expect, test } from '@playwright/test';

import { getComponents } from '../apps/remix/app/data.server';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe.configure({ mode: 'parallel' });

test.describe('Remix SSR', async () => {
  const components = await getComponents();

  for (const component of components) {
    test(`${component.name}`, async ({ page }) => {
      await page.goto(`http://localhost:3000/${component.to}`);

      // convert pascalcase component name to dashcase for test ID
      const dashify = (str: string) =>
        str
          .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
          .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

      const element = page.getByTestId(dashify(component.name));
      // @ts-expect-error role
      const rac = page.getByRole(component.role);

      await expect(element.or(rac)).toBeVisible();
    });
  }
});
