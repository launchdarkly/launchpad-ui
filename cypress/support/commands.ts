Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-test-id="${selector}"]`, ...args);
});

Cypress.Commands.add('getByRole', (selector, ...args) => {
  return cy.get(`[role="${selector}"]`, ...args);
});
