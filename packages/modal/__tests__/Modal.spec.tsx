import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

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
});
