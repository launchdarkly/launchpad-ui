import { Button, ButtonGroup } from '../src';

describe('ButtonGroup', () => {
  it('renders', () => {
    cy.mount(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    cy.getByTestId('button-group').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    cy.checkA11y();
  });
});
