import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { Modal, ModalBody, ModalFooter, ModalHeader, Prompt } from '../src';

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

  it('is accessible', async () => {
    const { container } = render(
      <Prompt>
        <Modal transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </Prompt>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
