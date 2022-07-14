import { test, expect } from '@playwright/experimental-ct-react';

import { CollapsibleAlert } from '../src/CollapsibleAlert';
import { AlertKind } from '../src/types';

test.describe('CollapsibleAlert', () => {
  test('is accessible', async ({ mount }) => {
    const component = await mount(
      <CollapsibleAlert message="A test message." kind={AlertKind.WARNING} />
    );
    await expect(component).toBeAccessible();
  });
});
