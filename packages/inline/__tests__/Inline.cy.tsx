import { Inline } from '../src';

describe('Inline', () => {
  it('renders', () => {
    cy.mount(<Inline>An important message</Inline>);
    cy.getByTestId('inline').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Inline>An important message</Inline>);
    cy.checkA11y();
  });
});
