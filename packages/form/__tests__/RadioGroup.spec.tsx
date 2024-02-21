import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Label, Radio, RadioGroup } from '../src';

describe('RadioGroup', () => {
  it('renders', () => {
    render(
      <RadioGroup name="radio group" value="one" onChange={() => undefined}>
        <Radio value="one" aria-label="radio one">
          One
        </Radio>
        <Radio value="two" aria-label="radio two">
          Two
        </Radio>
      </RadioGroup>
    );
    expect(screen.getByLabelText('radio one')).toBeInTheDocument();
  });

  it('renders a legend', () => {
    render(
      <RadioGroup name="radio group" value="one" onChange={() => undefined} legend="my legend">
        <Radio value="one" aria-label="radio one">
          One
        </Radio>
        <Radio value="two" aria-label="radio two">
          Two
        </Radio>
      </RadioGroup>
    );
    expect(screen.getByText('my legend')).toBeInTheDocument();
  });

  it('renders with separate labels', () => {
    render(
      <RadioGroup name="radio group" value="one" onChange={() => undefined} legend="my legend">
        <Radio value="one" id="one" aria-label="radio one" />
        <Label htmlFor="one">One</Label>
        <Radio value="two" id="two" aria-label="radio two" />
        <Label htmlFor="one">Two</Label>
      </RadioGroup>
    );
    expect(screen.getByLabelText('Two')).toBeInTheDocument();
  });
});
