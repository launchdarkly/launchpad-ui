import { InlineEdit } from '../src';

describe('InlineEdit', () => {
  it('renders', () => {
    const editValue = 'test';
    cy.mount(
      <InlineEdit defaultValue={editValue} onSave={() => undefined}>
        <span>{editValue}</span>
      </InlineEdit>
    );
    cy.getByTestId('inline-edit').should('be.visible');
  });

  it('is accessible', () => {
    const editValue = 'test';
    cy.mount(
      <InlineEdit defaultValue={editValue} onSave={() => undefined}>
        <span>{editValue}</span>
      </InlineEdit>
    );
    cy.checkA11y();
    cy.getByRole('button').click();
    cy.checkA11y();
  });
});
