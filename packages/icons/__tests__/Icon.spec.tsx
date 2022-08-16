import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Add, IconSize, Info, KindIcon } from '../src';

describe('Icon', () => {
  it('renders', () => {
    render(<Add size={IconSize.MEDIUM} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('is labelled by a title', () => {
    render(<Info size={IconSize.MEDIUM} />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });

  it('returns an icon based on the kind passed', () => {
    render(<KindIcon kind="warning" />);
    expect(screen.getByTitle('Warning')).toBeInTheDocument();

    render(<KindIcon kind="error" />);
    expect(screen.getByTitle('Error')).toBeInTheDocument();

    render(<KindIcon kind="info" />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });
});
