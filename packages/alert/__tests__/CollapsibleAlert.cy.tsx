import { CollapsibleAlert } from '../src';

describe('CollapsibleAlert', () => {
  it('should render', () => {
    cy.mount(<CollapsibleAlert message="A test message." kind="warning" />);
    cy.get('[data-test-id="collapsible-alert"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<CollapsibleAlert message="A test message." kind="warning" />);
    cy.checkA11y();
  });
});
