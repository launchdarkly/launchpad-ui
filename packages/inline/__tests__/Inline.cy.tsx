import { Inline } from '../src';

describe('Inline', () => {
  it('renders', () => {
    cy.mount(
      <Inline>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Inline>
    );
    cy.getByTestId('inline').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Inline>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Inline>
    );
    cy.checkA11y();
  });
});
