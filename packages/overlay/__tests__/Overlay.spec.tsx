/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { it, expect, describe, vi } from 'vitest';

import { Overlay } from '../src';

describe('Overlay', () => {
  it('renders', () => {
    render(<Overlay isOpen onClose={() => undefined} />);
    expect(document.querySelector('.Portal')).not.toBeNull();
  });

  it('is accessible', async () => {
    render(<Overlay isOpen onClose={() => undefined} />);
    const portal = document.querySelector('.Portal') as Element;
    const results = await axe(portal);
    expect(results).toHaveNoViolations();
  });

  it('renders children when open', () => {
    const { rerender } = render(
      <Overlay isOpen={false} onClose={() => undefined}>
        <button>test</button>
      </Overlay>
    );
    expect(screen.queryByRole('button')).toBeNull();

    rerender(
      <Overlay isOpen onClose={() => undefined}>
        <button>test</button>
      </Overlay>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClose when escape is pressed', async () => {
    const spy = vi.fn();
    render(<Overlay isOpen onClose={spy} />);

    const portal = document.querySelector('.Portal') as Element;
    userEvent.setup();
    await userEvent.type(portal, '{esc}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('enforces focus', async () => {
    render(
      <Overlay isOpen onClose={() => undefined} isModal>
        <button>test</button>
      </Overlay>
    );

    userEvent.setup();
    await userEvent.tab();

    expect(screen.getByRole('button')).toHaveFocus();
  });
});
