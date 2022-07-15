import { test, expect } from '@playwright/experimental-ct-react';
import { Item } from '@react-stately/collections';

import { TabList } from '../src/TabList';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('TabList', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );
    await expect(page).toBeAccessible();
  });
});
