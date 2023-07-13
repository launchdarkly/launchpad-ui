import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
import 'cypress-real-events/support';

import '../../.storybook/styles.css';
import { IconContext } from '../../packages/icons/src';
import icons from '../../packages/icons/src/img/sprite.svg';
import '../../packages/tokens/dist/index.css';
import '../../packages/tokens/dist/themes.css';
import '../utils/theme';

import './commands';

Cypress.Commands.add('mount', (component, options = {}) => {
  const { ...mountOptions } = options;

  const wrapped = <IconContext.Provider value={{ path: icons }}>{component}</IconContext.Provider>;

  return mount(wrapped, mountOptions);
});

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
