import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../src';

describe('Modal', () => {
  it('renders', async () => {
    render(
      <Modal>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('calls onCancel when escape key is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal onCancel={spy}>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
