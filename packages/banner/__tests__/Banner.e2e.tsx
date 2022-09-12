import { test, expect } from '@playwright/experimental-ct-react';

import { Banner, type BannerProps } from '../src/Banner';
import { BannerKind } from '../src/types';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: BannerProps) => (
  <Banner kind={BannerKind.INFO} {...props}>
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
