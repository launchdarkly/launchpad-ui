import { RadioCard } from '../src';

describe('RadioCard', () => {
  it('renders', () => {
    cy.mount(<RadioCard label="label" id="label" />);
    cy.getByTestId('label').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<RadioCard label="label" id="label" />);
    cy.checkA11y();
  });
});
