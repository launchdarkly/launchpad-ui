import { test, expect } from '@playwright/experimental-ct-react';

import { Lozenge } from '../src/Lozenge';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Lozenge', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Lozenge>Lozenge</Lozenge>);
    await expect(page).toBeAccessible();
  });
});
