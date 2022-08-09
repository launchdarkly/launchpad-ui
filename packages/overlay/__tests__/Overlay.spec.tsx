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
    const user = userEvent.setup();
    render(
      <Overlay isOpen onClose={spy}>
        <button>test</button>
      </Overlay>
    );

    await user.tab();
    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('enforces focus', async () => {
    const user = userEvent.setup();
    render(
      <Overlay isOpen onClose={() => undefined} isModal>
        <button>test</button>
      </Overlay>
    );

    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('enforces focus outside the container', async () => {
    const user = userEvent.setup();
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

    await user.tab();
    await waitFor(() => {
      expect(screen.getByRole('tab')).toHaveFocus();
    });
  });
});
