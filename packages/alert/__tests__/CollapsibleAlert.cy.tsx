import { CollapsibleAlert } from '../src';

describe('CollapsibleAlert', () => {
  it('renders', () => {
    cy.mount(<CollapsibleAlert message="A test message." kind="warning" />);
    cy.getByTestId('collapsible-alert').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<CollapsibleAlert message="A test message." kind="warning" />);
    cy.checkA11y();
  });
});
