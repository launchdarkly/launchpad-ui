import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Add, IconSize, Info } from '../src';

describe('Icon', () => {
  it('renders', () => {
    render(<Add size={IconSize.MEDIUM} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<Add size={IconSize.MEDIUM} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('is labelled by a title', () => {
    render(<Info size={IconSize.MEDIUM} />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });
});
