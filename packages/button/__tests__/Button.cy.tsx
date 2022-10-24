import { Button } from '../src';

describe('Button', () => {
  it('renders', () => {
    cy.mount(<Button>Button</Button>);
    cy.getByTestId('button').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Button>Button</Button>);
    cy.checkA11y();
  });
});
