import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
import 'cypress-real-events/support';

import '../../.storybook/styles.css';
import '../../packages/tokens/dist/index.css';
import '../../packages/tokens/dist/themes.css';
import '../utils/theme';

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
      {
        id: 'region',
        enabled: false,
      },
    ],
  });
});
