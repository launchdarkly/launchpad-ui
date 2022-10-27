import { Modal } from '../src';

describe('Modal', () => {
  it('renders', () => {
    cy.mount(
      <Modal title="Title">
        <p>Body</p>
      </Modal>
    );
    cy.getByTestId('modal').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Modal title="Title" withCloseButton>
        <p>Body</p>
      </Modal>
    );
    cy.checkA11y();
  });

  it('calls onCancel when escape key is pressed', () => {
    const onCancelSpy = cy.spy().as('onCancelSpy');
    cy.mount(
      <Modal title="Title" onCancel={onCancelSpy}>
        <p>Body</p>
      </Modal>
    );

    cy.getByTestId('modal').type('{esc}');

    cy.get('@onCancelSpy').should('have.been.calledOnce');
  });
});
