import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Add, IconSize, Info, StatusIcon, StatusIconKind } from '../src';

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
    render(<StatusIcon kind={StatusIconKind.WARNING} />);
    expect(screen.getByTitle('Warning')).toBeInTheDocument();

    render(<StatusIcon kind={StatusIconKind.ERROR} />);
    expect(screen.getByTitle('Error')).toBeInTheDocument();

    render(<StatusIcon kind={StatusIconKind.INFO} />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });
});
