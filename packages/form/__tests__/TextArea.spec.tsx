import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { TextArea } from '../src';

describe('TextArea', () => {
  it('renders', () => {
    render(
      <TextArea
        value="my text"
        aria-label="My Text Area"
        name="mytextarea"
        onChange={() => undefined}
      />
    );
    expect(screen.getByLabelText('My Text Area')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <TextArea
        value="my text"
        aria-label="My Text Area"
        name="mytextarea"
        onChange={() => undefined}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
