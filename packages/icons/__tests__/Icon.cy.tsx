import { Add } from '../src';

describe('Icon', () => {
  it('renders', () => {
    cy.mount(<Add />);
    cy.get('[data-test-id="icon"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Add />);
    cy.checkA11y();
  });
});
