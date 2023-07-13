import { Icon } from '../src';

describe('Icon', () => {
  it('renders', () => {
    cy.mount(<Icon name="add" size="medium" />);
    cy.getByTestId('icon').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Icon name="add" size="medium" />);
    cy.checkA11y();
  });
});
