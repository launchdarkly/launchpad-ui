import { test, expect } from '@playwright/experimental-ct-react';

import { Lozenge } from '../src/Lozenge';

test.describe('Lozenge', () => {
  test('is accessible', async ({ mount }) => {
    const component = await mount(<Lozenge>Lozenge</Lozenge>);
    await expect(component).toBeAccessible();
  });
});
