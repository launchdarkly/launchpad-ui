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

  it('renders after a delay', () => {
    cy.mount(<Progress delayMs={250} size="small" />);
    cy.get('[data-test-id="progress"]').should('be.visible');
  });

  it('renders a svg with no delay', () => {
    cy.mount(<Progress value={2} />);
    cy.get('[data-test-id="progress"]').should('be.visible');
  });
});
