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

test.describe('Lozenge', () => {
  test('is accessible', async ({ page }) => {
    await page.goto('?id=components-lozenge--default&viewMode=story');
    const results = await builder.analyze();
    await expect(results.violations.length).toBe(0);
  });

  test('is focusable when clickable', async ({ page }) => {
    await page.goto('?id=components-lozenge--default&viewMode=story&args=isClickable:true');
    const lozenge = page.locator('.Lozenge');
    await lozenge.click();
    await expect(lozenge).toBeFocused();
  });
});
