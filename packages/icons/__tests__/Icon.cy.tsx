import { Add } from '../src';

describe('Icon', () => {
  it('renders', () => {
    cy.mount(<Add />);
    cy.getByTestId('icon').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Add />);
    cy.checkA11y();
  });
});
