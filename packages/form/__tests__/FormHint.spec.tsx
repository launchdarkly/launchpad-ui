import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { FormHint } from '../src';

describe('FormHint', () => {
  it('renders', () => {
    render(<FormHint>An important hint</FormHint>);
    expect(screen.getByText('An important hint')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<FormHint>An important hint</FormHint>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
