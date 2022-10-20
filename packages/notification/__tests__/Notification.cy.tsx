import { Notification } from '../src';

describe('Notification', () => {
  it('renders', () => {
    cy.mount(<Notification message="hi" level="info" />);
    cy.getByTestId('notification').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Notification message="hi" level="info" />);
    cy.checkA11y();
  });
});
