import { getComponents } from '../../../apps/remix/app/data.server';

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Remix SSR', async () => {
  const components = await getComponents();

  for (const component of components) {
    it(`Renders component ${component.name}`, () => {
      cy.visit(`/${component.to}`);

      // convert pascalcase component name to dashcase for test ID
      const dashify = (str: string) =>
        str
          .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
          .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

      cy.get(`[data-test-id="${dashify(component.name)}"]`).should('be.visible');
    });
  }
});
