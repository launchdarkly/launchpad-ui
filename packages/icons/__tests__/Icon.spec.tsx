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

  it('passes aria labeling to svg', () => {
    render(<Info kind="warning" aria-label="test" />);

    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'test');
    expect(screen.getByRole('img')).toHaveAttribute('aria-hidden', 'false');
  });

  it('hides svg by default when aria label is not passed', () => {
    render(<Info kind="warning" />);

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
  });
});
