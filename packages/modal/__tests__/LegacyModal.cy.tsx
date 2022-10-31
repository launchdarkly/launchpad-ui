import { LegacyModal, LegacyModalBody, LegacyModalFooter, LegacyModalHeader } from '../src';

describe('Modal', () => {
  it('renders', () => {
    cy.mount(
      <LegacyModal>
        <LegacyModalHeader>Modal</LegacyModalHeader>
        <LegacyModalBody>Body</LegacyModalBody>
        <LegacyModalFooter>Footer</LegacyModalFooter>
      </LegacyModal>
    );
    cy.getByTestId('modal').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <LegacyModal withCloseButton>
        <LegacyModalHeader>Modal</LegacyModalHeader>
        <LegacyModalBody>Body</LegacyModalBody>
        <LegacyModalFooter>Footer</LegacyModalFooter>
      </LegacyModal>
    );
    cy.checkA11y();
  });

  it('calls onCancel when escape key is pressed', () => {
    const onCancelSpy = cy.spy().as('onCancelSpy');
    cy.mount(
      <LegacyModal onCancel={onCancelSpy}>
        <LegacyModalHeader>Modal</LegacyModalHeader>
        <LegacyModalBody>Body</LegacyModalBody>
        <LegacyModalFooter>Footer</LegacyModalFooter>
      </LegacyModal>
    );

    cy.getByTestId('modal').type('{esc}');

    cy.get('@onCancelSpy').should('have.been.calledOnce');
  });
});
