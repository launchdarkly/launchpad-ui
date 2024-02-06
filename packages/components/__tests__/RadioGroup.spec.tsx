import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { RadioGroup, Radio } from '../src';

describe('Radio', () => {
  it('renders', () => {
    render(
      <RadioGroup>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup')).toBeVisible();
  });

  it('renders selected', () => {
    render(
      <RadioGroup defaultValue="2">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup')).toBeVisible();
  });
});
