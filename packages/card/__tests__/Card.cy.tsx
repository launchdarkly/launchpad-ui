import { Card } from '../src';

describe('Card', () => {
  it('renders', () => {
    cy.mount(<Card>An important message</Card>);
    cy.getByTestId('card').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Card>An important message</Card>);
    cy.checkA11y();
  });
});
