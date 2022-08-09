import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Overlay } from '../src';

describe('Overlay', () => {
  it('renders', () => {
    render(<Overlay isOpen onClose={() => undefined} />);
    expect(document.querySelector('.Portal')).not.toBeNull();
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
    render(
      <Overlay isOpen onClose={spy}>
        <button>test</button>
      </Overlay>
    );

    userEvent.setup();
    await userEvent.tab();
    await userEvent.keyboard('{Escape}');

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

  it('enforces focus outside the container', async () => {
    render(
      <>
        <button>test</button>
        <Overlay isOpen onClose={() => undefined}>
          <div tabIndex={0} role="tab">
            div
          </div>
        </Overlay>
      </>
    );

    userEvent.setup();
    await userEvent.tab();

    await waitFor(() => {
      expect(screen.getByRole('tab')).toHaveFocus();
    });
  });
});
