import { Alert } from '../src';

describe('Alert', () => {
  it('renders', () => {
    cy.mount(<Alert kind="info">Alert text!</Alert>);
    cy.get('[data-test-id="alert"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Alert kind="info">Alert text!</Alert>);
    cy.checkA11y();
  });
});
