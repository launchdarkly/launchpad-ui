import { Popover } from '../src';

const POPOVER = 'popover';

describe('Popover', () => {
  it('renders', () => {
    cy.mount(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    cy.get('button').click();
    cy.getByTestId(POPOVER).should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Popover isOpen>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    cy.checkA11y();
  });

  it('opens on click of the target', () => {
    cy.mount(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    cy.get('button').click();
    cy.getByTestId(POPOVER).should('be.visible');
  });

  it('does not open when content is empty string', () => {
    cy.mount(
      <Popover content="">
        <button>Target</button>
      </Popover>
    );

    cy.get('button').click();
    cy.getByTestId(POPOVER).should('not.exist');
  });

  it('opens and closes on mouse hover/unhover of the target', () => {
    cy.mount(
      <Popover interactionKind="hover">
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    cy.get('button').trigger('mouseover');
    cy.getByTestId(POPOVER).should('be.visible');

    cy.get('button').trigger('mouseout');
    cy.getByTestId(POPOVER).should('not.exist');
  });

  it('opens and closes on mouse focus/blur of the target', () => {
    cy.mount(
      <Popover interactionKind="hover-or-focus">
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    cy.get('button').focus();
    cy.getByTestId(POPOVER).should('be.visible');

    cy.get('button').blur();
    cy.getByTestId(POPOVER).should('not.exist');
  });

  it('closes when the Escape key is pressed', () => {
    cy.mount(
      <Popover interactionKind="hover">
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    cy.get('button').trigger('mouseenter');
    cy.get('button').type('{esc}');
    cy.getByTestId(POPOVER).should('not.exist');
  });

  it('updates to fixed position in a modal', () => {
    document.body.classList.add('has-modal');

    cy.mount(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    cy.get('button').click();
    cy.getByTestId(POPOVER).should('have.css', 'position', 'fixed');
  });

  it('calls onClose when closed', () => {
    const onCloseSpy = cy.spy().as('onCloseSpy');
    cy.mount(
      <Popover interactionKind="hover-or-focus" onClose={onCloseSpy}>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    cy.get('button').focus();
    cy.get('button').blur();
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });
});
