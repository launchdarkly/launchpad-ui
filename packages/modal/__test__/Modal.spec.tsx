import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { ModalBody, ModalFooter, ModalHeader, ModalTransition, Prompt } from '../src';

describe('Modal', () => {
  it('renders', () => {
    render(
      <Prompt>
        <ModalTransition transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </ModalTransition>
      </Prompt>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <Prompt>
        <ModalTransition transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </ModalTransition>
      </Prompt>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
