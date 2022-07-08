import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Select } from '../src';

describe('Select', () => {
  it('renders', () => {
    render(
      <Select name="select" aria-label="My select" value="one" onChange={() => undefined}>
        <option value="one" aria-label="option one">
          One
        </option>
        <option value="two" aria-label="option two">
          Two
        </option>
      </Select>
    );
    expect(screen.getByLabelText('My select')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <Select name="select" aria-label="My select" value="one" onChange={() => undefined}>
        <option value="one" aria-label="option one">
          One
        </option>
        <option value="two" aria-label="option two">
          Two
        </option>
      </Select>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
