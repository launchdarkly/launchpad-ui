import { Toggle } from '../src';

describe('Toggle', () => {
  it('should render', () => {
    cy.mount(<Toggle />);
    cy.get('[data-test-id="toggle"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <>
        <label htmlFor="toggle">label</label>
        <Toggle id="toggle" />
      </>
    );
    cy.checkA11y();
  });
});
