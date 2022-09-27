import { toggleDarkMode } from '../../../cypress/utils/dark-mode';
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

  it('calls onChange when toggled', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Toggle onChange={onChangeSpy} />);

    cy.get('[data-test-id="toggle"]').click({ force: true });
    cy.get('@onChangeSpy').should('have.been.calledOnce');
  });

  context('dark mode', () => {
    toggleDarkMode();

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
});
