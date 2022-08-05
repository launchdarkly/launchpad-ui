import type { ButtonGroupProps } from '../src/ButtonGroup';

import { test, expect } from '@playwright/experimental-ct-react';

import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ButtonGroupProps) => (
  <ButtonGroup {...props}>
    <Button>One</Button>
    <Button>Two</Button>
  </ButtonGroup>
);

test.describe('ButtonGroup', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
