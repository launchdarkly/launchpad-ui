import { test, expect } from '@playwright/test';

test.describe('Remix SSR', () => {
  test('alert renders', async ({ page }) => {
    await page.goto('/components/alert');
    const alert = page.locator('.Alert');
    await expect(alert).toBeVisible();
  });

  test('button renders', async ({ page }) => {
    await page.goto('/components/button');
    const button = page.locator('.Button');
    await expect(button).toBeVisible();
  });

  test('icon renders', async ({ page }) => {
    await page.goto('/components/icon');
    const icon = page.locator('.Icon');
    await expect(icon).toBeVisible();
  });

  test('lozenge renders', async ({ page }) => {
    await page.goto('/components/lozenge');
    const lozenge = page.locator('.Lozenge');
    await expect(lozenge).toBeVisible();
  });

  test('progress renders', async ({ page }) => {
    await page.goto('/components/progress');
    const progress = page.locator('.Progress');
    await expect(progress).toBeVisible();
  });

  test('toggle renders', async ({ page }) => {
    await page.goto('/components/toggle');
    const toggle = page.locator('.Toggle');
    await expect(toggle).toBeVisible();
  });
});
