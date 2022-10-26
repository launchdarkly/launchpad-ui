import { Modal, ModalBody, ModalFooter, ModalHeader } from '../src';

describe('Modal', () => {
  it('renders', () => {
    cy.mount(
      <Modal>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    cy.getByTestId('modal').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Modal withCloseButton>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    cy.checkA11y();
  });

  it('calls onCancel when escape key is pressed', () => {
    const onCancelSpy = cy.spy().as('onCancelSpy');
    cy.mount(
      <Modal onCancel={onCancelSpy}>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    cy.getByTestId('modal').type('{esc}');

    cy.get('@onCancelSpy').should('have.been.calledOnce');
  });
});
