import { test, expect } from '@playwright/experimental-ct-react';
import { Fragment } from 'react';

import { Label } from '../../form/src/Label';
import { Slider, type SliderProps } from '../src/Slider';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: SliderProps) => (
  <Fragment>
    <Label htmlFor="slider">Slider</Label>
    <Slider {...props} id="slider" min={0} max={50} value={25} onChange={() => undefined} />
  </Fragment>
);

test.describe('Slider', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
