import { test, expect } from '@playwright/experimental-ct-react';

import { Person } from '../../icons/src/Person';
import { Avatar, type AvatarProps } from '../src/Avatar';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: AvatarProps) => <Avatar {...props} url="" defaultIcon={Person} />;

test.describe('Avatar', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
