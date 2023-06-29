import { Columns, Column } from '../src';

describe('Columns', () => {
  it('renders', () => {
    cy.mount(
      <Columns>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Columns>
    );
    cy.getByTestId('columns').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Columns>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Columns>
    );
    cy.checkA11y();
  });
});
