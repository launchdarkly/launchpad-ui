/// <reference types="cypress-real-events" />

import type { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Chainable {
      mount: typeof mount;
    }
  }
}
