import type { NodeResult, Result } from 'axe-core';

import 'cypress-axe';

const showViolations = (violations: Result[]) => {
  violations.forEach((violation: Result) => {
    const { nodes, helpUrl, help, impact } = violation;
    const nodesList = nodes.map((node: NodeResult) => node.target).join(', ');

    const name = `${impact || ''} a11y error`;
    const message = `[${help}](${helpUrl}) affecting the following node(s): [${nodesList}]. Check the console for additional error details.`;

    Cypress.log({
      name,
      message,
      consoleProps: () => violation,
      $el: Cypress.$(nodesList),
    });
  });
};

Cypress.Commands.overwrite('checkA11y', (originalFn, context, options) => {
  return originalFn(context, options, showViolations);
});

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-test-id="${selector}"]`, ...args);
});

Cypress.Commands.add('getByRole', (selector, ...args) => {
  return cy.get(`[role="${selector}"]`, ...args);
});
