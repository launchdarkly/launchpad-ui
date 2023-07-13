import { Avatar } from '../src';

describe('Avatar', () => {
  it('renders', () => {
    cy.mount(<Avatar url="" />);
    cy.getByTestId('avatar').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Avatar url="" />);
    cy.checkA11y();
  });
});
