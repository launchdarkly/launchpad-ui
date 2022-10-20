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
    cy.getByTestId('tooltip').should('be.visible');
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
