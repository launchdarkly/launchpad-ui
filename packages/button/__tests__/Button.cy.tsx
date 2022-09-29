import { Button } from '../src';

describe('Button', () => {
  it('renders', () => {
    cy.mount(<Button>Button</Button>);
    cy.get('[data-test-id="button"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Button>Button</Button>);
    cy.checkA11y();
  });
});
