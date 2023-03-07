import { Tag } from '../src';

describe('Tag', () => {
  it('renders', () => {
    cy.mount(<Tag>An important message</Tag>);
    cy.getByTestId('tag').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Tag>An important message</Tag>);
    cy.checkA11y();
  });
});
