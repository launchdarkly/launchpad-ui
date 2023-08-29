/* eslint-disable @typescript-eslint/no-explicit-any */

import type { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Chainable {
      mount: typeof mount;

      /**
       * Get elements with a data-test-id attribute that match the selector
       * @example
       * cy.getByTestId('tooltip')
       */
      getByTestId(selector: string, args?: any): Chainable<JQuery<HTMLElement>>;

      /**
       * Get elements with a role attribute that match the selector
       * @example
       * cy.getByRole('tab')
       */
      getByRole(selector: string, args?: any): Chainable<JQuery<HTMLElement>>;
    }
  }
}
