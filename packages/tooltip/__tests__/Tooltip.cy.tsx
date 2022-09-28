import { Tooltip } from '../src';

describe('Tooltip', () => {
  it('renders', () => {
    cy.mount(
      <Tooltip isOpen>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );
    cy.get('[data-test-id="tooltip"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Tooltip isOpen>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );
    cy.checkA11y();
  });
});
