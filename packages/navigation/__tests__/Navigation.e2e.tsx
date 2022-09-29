import { test, expect } from '@playwright/experimental-ct-react';
import { MemoryRouter } from 'react-router-dom';

import {
  Navigation,
  NavigationItem,
  type NavigationProps,
  type NavigationItemProps,
} from '../src/Navigation';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: NavigationProps<NavigationItemProps>) => (
  <MemoryRouter>
    <Navigation title="Page menu" {...props}>
      <NavigationItem key={1} name="First" to="/first" />
      <NavigationItem key={2} name="Second" to="/second" />
      <NavigationItem key={3} name="Third" to="/third" />
      <NavigationItem key={4} name="Fourth" to="/fourth" />
    </Navigation>
  </MemoryRouter>
);

test.describe('Navigation', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });

  test('renders as a dropdown menu when viewport is small', async ({ mount, page }) => {
    await mount(createComponent());

    await page.setViewportSize({
      width: 320,
      height: 500,
    });

    await page.locator('[data-test-id=navigation-menu-button]').click();

    const element = page.locator('[role="menu"]');
    await expect(element).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
