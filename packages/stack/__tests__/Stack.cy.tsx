import { Stack } from '../src';

describe('Stack', () => {
  it('renders', () => {
    cy.mount(
      <Stack gap="2" align="center">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Stack>
    );
    cy.getByTestId('stack').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Stack gap="2" align="center">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Stack>
    );
    cy.checkA11y();
  });
});
