import { DataTable } from '../src';

describe('DataTable', () => {
  it('renders', () => {
    cy.mount(<DataTable>An important message</DataTable>);
    cy.getByTestId('data-table').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<DataTable>An important message</DataTable>);
    cy.checkA11y();
  });
});
