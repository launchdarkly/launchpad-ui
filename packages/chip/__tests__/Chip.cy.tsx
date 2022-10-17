import { Chip } from '../src';

describe('Chip', () => {
  it('renders', () => {
    cy.mount(<Chip>Chip</Chip>);
    cy.get('[data-test-id="chip"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Chip>Chip</Chip>);
    cy.checkA11y();
  });

  it('can be clickable', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(
      <Chip kind="new" onClick={onClickSpy}>
        New Chip
      </Chip>
    );

    cy.get('[data-test-id="chip"]').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });
});
