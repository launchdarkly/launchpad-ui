import { Progress } from '../src';

describe('Progress', () => {
  it('renders', () => {
    cy.mount(<Progress />);
    cy.get('[data-test-id="progress"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Progress />);
    cy.checkA11y();
  });
});
