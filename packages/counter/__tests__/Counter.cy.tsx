import { Counter } from '../src';

describe('Counter', () => {
  it('should render', () => {
    cy.mount(<Counter value={12} />);
    cy.get('[data-test-id="counter"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Counter value={12} />);
    cy.checkA11y();
  });
});
