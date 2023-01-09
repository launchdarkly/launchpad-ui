import { Combobox } from '../src';

describe('Combobox', () => {
  it('renders', () => {
    cy.mount(<Combobox>An important message</Combobox>);
    cy.getByTestId('combobox').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Combobox>An important message</Combobox>);
    cy.checkA11y();
  });
});
