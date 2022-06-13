import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { FieldSet } from '../src';

describe('FieldSet', () => {
  it('renders', () => {
    render(<FieldSet testId="testing" />);
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<FieldSet />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
