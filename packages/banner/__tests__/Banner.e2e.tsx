import { test, expect } from '@playwright/experimental-ct-react';

import { Banner, type BannerProps } from '../src/Banner';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: BannerProps) => (
  <Banner kind="info" {...props}>
    Banner
  </Banner>
);

test.describe('Banner', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
