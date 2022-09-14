import { Toggle } from '../src';

describe('Toggle', () => {
  it('should render', () => {
    cy.mount(<Toggle />);
    cy.findByRole('switch').should('be.visible');
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
