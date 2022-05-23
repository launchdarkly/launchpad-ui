import type { Page } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

import { skipRules } from '../../../tests/axeRules';

let page: Page;
let builder: AxeBuilder;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  builder = new AxeBuilder({ page });
  builder.disableRules(skipRules);
});

test.afterAll(async () => {
  await page.close();
});

test.describe('CollapsibleAlert', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');
    const results = await builder.analyze();
    await expect(results.violations.length).toBe(0);
  });

  test('is keyboard accessible', async ({ page }) => {
    await page.goto('?id=components-collapsiblealert--collapsible&viewMode=story');

    await page.press('.Alert', 'Tab');
    await page.press('.CollapsibleAlert-button', 'Enter');
    const table = await page.locator('.Table');
    await expect(table).toBeVisible();
  });
});
