import { Primitives } from '../src';

describe('Primitives', () => {
  it('renders', () => {
    cy.mount(<Primitives>An important message</Primitives>);
    cy.getByTestId('primitives').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Primitives>An important message</Primitives>);
    cy.checkA11y();
  });
});
