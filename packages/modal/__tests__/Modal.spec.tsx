import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import { ModalBody, ModalFooter, ModalHeader, ModalTransition, Prompt } from '../src';

describe('Modal', () => {
  it('renders', async () => {
    render(
      <Prompt>
        <ModalTransition transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </ModalTransition>
      </Prompt>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });
});
