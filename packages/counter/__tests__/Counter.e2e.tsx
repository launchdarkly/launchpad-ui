import { test, expect } from '@playwright/experimental-ct-react';

import { Counter, type CounterProps } from '../src/Counter';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props: CounterProps) => <Counter {...props}>An important message</Counter>;

test.describe('Counter', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent({ value: 12 }));

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
