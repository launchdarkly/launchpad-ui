import { test, expect } from '@playwright/experimental-ct-react';
import { Item } from '@react-stately/collections';

import { TabList, type TabListProps } from '../src/TabList';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: TabListProps<string>) => (
  <TabList {...props}>
    <Item key="1" title="First Tab">
      <p style={{ padding: '1rem' }}>Active tabpanel</p>
    </Item>
    <Item key="2" title="Another tab">
      <p style={{ padding: '1rem' }}>Another tabpanel</p>
    </Item>
  </TabList>
);

test.describe('TabList', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
