import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { RadioGroup, Radio, Label } from '../src';

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

  it('is accessible', async () => {
    const { container } = render(
      <RadioGroup name="radio group" value="one" onChange={() => undefined}>
        <Radio value="one" aria-label="radio one">
          One
        </Radio>
        <Radio value="two" aria-label="radio one">
          Two
        </Radio>
      </RadioGroup>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
