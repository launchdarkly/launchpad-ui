import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { Add, IconSize, Info, KindIcon } from '../src';

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

  it('returns an icon based on the kind passed', () => {
    render(<KindIcon kind="warning" />);
    expect(screen.getByTitle('Warning')).toBeInTheDocument();
  });
});
