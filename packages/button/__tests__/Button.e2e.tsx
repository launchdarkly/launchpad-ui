import { test, expect } from '@playwright/experimental-ct-react';

import { Button } from '../src/Button';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Button', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Button>Button</Button>);
    await expect(page).toBeAccessible();
  });
});
