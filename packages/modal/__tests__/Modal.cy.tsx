import { Modal, ModalBody, ModalFooter } from '../src';

describe('Modal', () => {
  it('renders', () => {
    cy.mount(
      <Modal title="Title">
        <ModalBody>Body</ModalBody>
        <ModalFooter primaryButton={<button>Click me</button>} />
      </Modal>
    );
    cy.getByTestId('modal').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Modal title="Title" withCloseButton>
        <ModalBody>Body</ModalBody>
        <ModalFooter primaryButton={<button>Click me</button>} />
      </Modal>
    );
    cy.checkA11y();
  });

  it('calls onCancel when escape key is pressed', () => {
    const onCancelSpy = cy.spy().as('onCancelSpy');
    cy.mount(
      <Modal title="Title" onCancel={onCancelSpy}>
        <ModalBody>Body</ModalBody>
        <ModalFooter primaryButton={<button>Click me</button>} />
      </Modal>
    );

    cy.getByTestId('modal').type('{esc}');

    cy.get('@onCancelSpy').should('have.been.calledOnce');
  });
});
