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
      <Popover isOpen>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    cy.checkA11y();
  });
});
