import { Toast } from '../src';

describe('Toast', () => {
  it('renders', () => {
    cy.mount(<Toast kind="info" content="An important message" onDismiss={() => undefined} />);
    cy.getByTestId('toast').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Toast kind="info" content="An important message" onDismiss={() => undefined} />);
    cy.checkA11y();
  });
});
