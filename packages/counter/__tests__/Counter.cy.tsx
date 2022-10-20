import { Counter } from '../src';

describe('Counter', () => {
  it('renders', () => {
    cy.mount(<Counter value={12} />);
    cy.getByTestId('counter').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Counter value={12} />);
    cy.checkA11y();
  });
});
