import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Modal } from '../src';

describe('Modal', () => {
  it('renders', async () => {
    render(
      <Modal title="Title">
        <p>Body text</p>
      </Modal>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('calls onCancel when escape key is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal title="Title" onCancel={spy}>
        <p>Body</p>
      </Modal>
    );

    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
