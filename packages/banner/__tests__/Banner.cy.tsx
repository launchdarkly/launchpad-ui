import { Banner } from '../src';

describe('Banner', () => {
  it('renders', () => {
    cy.mount(<Banner kind="info">Banner</Banner>);
    cy.get('[data-test-id="banner"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Banner kind="info">Banner</Banner>);
    cy.checkA11y();
  });
});
