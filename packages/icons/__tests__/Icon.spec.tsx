import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Add, Info, StatusIcon } from '../src';

describe('Icon', () => {
  it('renders', () => {
    render(<Add size="medium" />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('is labelled by a title', () => {
    render(<Info size="medium" />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });

  it('returns an icon based on the kind passed', () => {
    render(<StatusIcon kind="warning" />);
    expect(screen.getByTitle('Warning')).toBeInTheDocument();

    render(<StatusIcon kind="error" />);
    expect(screen.getByTitle('Error')).toBeInTheDocument();

    render(<StatusIcon kind="info" />);
    expect(screen.getByTitle('Info')).toBeInTheDocument();
  });
});
