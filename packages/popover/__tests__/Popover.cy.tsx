import { Popover } from '../src';

describe('Popover', () => {
  it('renders', () => {
    cy.mount(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    cy.get('button').click();
    cy.get('[data-test-id="popover"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    cy.get('button').click();

    // wait for animation to finish
    cy.wait(150);
    cy.checkA11y();
  });
});
