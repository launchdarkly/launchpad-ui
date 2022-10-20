import { Modal, ModalBody, ModalFooter, ModalHeader, ModalSheet, Prompt } from '../src';

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
    cy.getByTestId('modal').should('be.visible');
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

  it('can render as a sheet', () => {
    cy.mount(
      <ModalSheet withCloseButton>
        <section>
          <ModalHeader closeable>Modal</ModalHeader>
        </section>
      </ModalSheet>
    );
    cy.get('[role="dialog').should('be.visible');
  });

  it('calls onCancel when escape key is pressed', () => {
    const onCancelSpy = cy.spy().as('onCancelSpy');
    cy.mount(
      <Prompt>
        <Modal transition="pop" onCancel={onCancelSpy}>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </Prompt>
    );

    cy.getByTestId('modal').type('{esc}');

    cy.get('@onCancelSpy').should('have.been.calledOnce');
  });
});
