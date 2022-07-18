import { test, expect } from '@playwright/experimental-ct-react';

import { Notification, type NotificationProps } from '../src/Notification';
import { NotificationLevel } from '../src/types';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: NotificationProps) => (
  <Notification message="hi" level={NotificationLevel.INFO} {...props} />
);

test.describe('Notification', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
