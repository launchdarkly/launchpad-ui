import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { RadioGroup, Radio, Label } from '../src';

describe('Radio', () => {
  it('renders', () => {
    render(
      <RadioGroup>
        <Label>Label</Label>
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
        <Label>Label</Label>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup')).toBeVisible();
  });
});
