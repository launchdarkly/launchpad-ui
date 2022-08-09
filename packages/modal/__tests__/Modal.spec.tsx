import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalSheet, Prompt } from '../src';

describe('Modal', () => {
  it('renders', async () => {
    render(
      <Prompt>
        <Modal transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </Prompt>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('can render as a sheet', async () => {
    render(
      <ModalSheet withCloseButton>
        <section>
          <ModalHeader closeable>Modal</ModalHeader>
        </section>
      </ModalSheet>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('calls onCancel when escape key is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Prompt>
        <Modal transition="pop" onCancel={spy}>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </Prompt>
    );

    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
