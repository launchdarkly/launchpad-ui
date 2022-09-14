import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';

import '../../.storybook/styles.css';
import '../../packages/tokens/dist/dark.css';
import '../../packages/tokens/dist/index.css';

import './commands';

Cypress.Commands.add('mount', mount);

before(() => {
  cy.injectAxe();
  cy.configureAxe({
    rules: [
      {
        id: 'page-has-heading-one',
        enabled: false,
      },
    ],
  });
});
