import { Tooltip } from '../src';

describe('Tooltip', () => {
  it('renders', () => {
    cy.mount(
      <Tooltip>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );
    cy.get('button').click();
    cy.get('[data-test-id="tooltip"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Tooltip>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );
    cy.get('button').click();

    // wait for animation to finish
    cy.wait(150);
    cy.checkA11y();
  });
});
