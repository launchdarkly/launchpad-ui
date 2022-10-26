import { Drawer, DrawerHeader } from '../src';

describe('Drawer', () => {
  it('renders', () => {
    cy.mount(
      <Drawer>
        <section>
          <DrawerHeader>Drawer</DrawerHeader>
        </section>
      </Drawer>
    );
    cy.getByTestId('drawer').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Drawer>
        <DrawerHeader>Drawer</DrawerHeader>
      </Drawer>
    );
    cy.checkA11y();
  });

  it('calls onCancel when escape key is pressed', () => {
    const onCancelSpy = cy.spy().as('onCancelSpy');
    cy.mount(
      <Drawer onCancel={onCancelSpy}>
        <DrawerHeader>Drawer</DrawerHeader>
      </Drawer>
    );

    cy.getByTestId('drawer').type('{esc}');

    cy.get('@onCancelSpy').should('have.been.calledOnce');
  });
});
