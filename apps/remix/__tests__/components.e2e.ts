import { test, expect } from '@playwright/test';

test.describe('Remix SSR', () => {
  test('button renders', async ({ page }) => {
    await page.goto('/components/button');
    const button = page.locator('.Button');
    await expect(button).toBeVisible();
  });

  test('lozenge renders', async ({ page }) => {
    await page.goto('/components/lozenge');
    const lozenge = page.locator('.Lozenge');
    await expect(lozenge).toBeVisible();
  });
});
