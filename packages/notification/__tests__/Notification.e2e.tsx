import { test, expect } from '@playwright/experimental-ct-react';

import { Notification } from '../src/Notification';
import { NotificationLevel } from '../src/types';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Notification', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(<Notification message="hi" level={NotificationLevel.INFO} />);
    await expect(page).toBeAccessible();
  });
});
