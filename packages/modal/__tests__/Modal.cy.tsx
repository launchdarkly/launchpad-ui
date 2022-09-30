import { Modal, ModalBody, ModalFooter, ModalHeader, Prompt } from '../src';

describe('Modal', () => {
  it('renders', () => {
    cy.mount(
      <Prompt>
        <Modal transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </Prompt>
    );
    cy.get('[data-test-id="modal"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Prompt>
        <Modal transition="pop" withCloseButton>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </Prompt>
    );
    cy.checkA11y();
  });
});
