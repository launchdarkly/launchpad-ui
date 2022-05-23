import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import { Add, IconSize, Info } from '../src';

describe('Icon', () => {
  it('renders', () => {
    render(<Add size={IconSize.MEDIUM} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('is labelled by a title', () => {
    render(<Info size={IconSize.MEDIUM} />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });
});
