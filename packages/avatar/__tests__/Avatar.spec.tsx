import { Person } from '@launchpad-ui/icons';
import { it, expect, describe, vi } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Avatar } from '../src';

describe('Avatar', () => {
  it('renders', () => {
    globalThis.fetch = vi.fn().mockReturnValue(
      Promise.resolve({
        status: 200,
        blob: () => new Blob(['test'], { type: 'text/plain' }),
        headers: { get: vi.fn() },
      })
    );
    globalThis.URL.createObjectURL = vi.fn();
    render(<Avatar url="test" defaultIcon={Person} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('renders a default', () => {
    render(<Avatar url="" defaultIcon={Person} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('renders initials', () => {
    render(<Avatar url="" defaultIcon={Person} initials="LD" />);
    expect(screen.getByText('LD')).toBeInTheDocument();
  });
});
