import { Chip } from '../src';

describe('Chip', () => {
  it('should render', () => {
    cy.mount(<Chip>Chip</Chip>);
    cy.get('[data-test-id="chip"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Chip>Chip</Chip>);
    cy.checkA11y();
  });
});
