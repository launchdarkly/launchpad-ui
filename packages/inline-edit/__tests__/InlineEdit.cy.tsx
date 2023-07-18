import { InlineEdit } from '../src';

describe('InlineEdit', () => {
  it('renders', () => {
    cy.mount(<InlineEdit>An important message</InlineEdit>);
    cy.getByTestId('inline-edit').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<InlineEdit>An important message</InlineEdit>);
    cy.checkA11y();
  });
});
