import { test, expect } from '@playwright/experimental-ct-react';
import { MemoryRouter } from 'react-router-dom';

import { Navigation, NavigationItem, type NavigationItemProps } from '../src/Navigation';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (items: NavigationItemProps[]) => (
  <MemoryRouter>
    <Navigation items={items} title="Page menu">
      {(item) => (
        <NavigationItem
          key={item.to}
          name={item.name}
          to={item.to}
          tooltip={item.tooltip}
          tooltipContent={item.tooltipContent}
          status={item.status}
        />
      )}
    </Navigation>
  </MemoryRouter>
);

test.describe('Navigation', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(
      createComponent([
        {
          name: 'First',
          to: '/first',
        },
        {
          name: 'Second',
          to: '/second',
        },
      ])
    );

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
