import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { TextField } from '../src';

describe('TextField', () => {
  it('renders', () => {
    render(
      <TextField
        value="my text"
        aria-label="My Text Field"
        name="myTextField"
        onChange={() => undefined}
      />
    );
    expect(screen.getByLabelText('My Text Field')).toBeInTheDocument();
  });

  it('renders with suffix', () => {
    render(
      <TextField
        value="my text"
        suffix="my suffix"
        aria-label="My Text Field"
        name="myTextField"
        onChange={() => undefined}
      />
    );
    expect(screen.getByText('my suffix')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <TextField
        value="my text"
        aria-label="My Text Field"
        name="myTextField"
        onChange={() => undefined}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
