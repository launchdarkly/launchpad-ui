import { toggleDarkMode } from '../../../cypress/utils/dark-mode';
import { Toggle } from '../src';

describe('Toggle', () => {
  it('renders', () => {
    cy.mount(<Toggle />);
    cy.get('[data-test-id="toggle"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <>
        <label htmlFor="toggle">label</label>
        <Toggle id="toggle" />
      </>
    );
    cy.checkA11y();
  });

  it('can be reached with the keyboard', () => {
    cy.mount(<Toggle />);

    const toggle = cy.get('[data-test-id="toggle"]');

    toggle.focus();
    toggle.type(' ');
    toggle.should('be.checked');
  });

  it('renders an unchecked Toggle', () => {
    cy.mount(<Toggle />);

    const toggle = cy.get('[data-test-id="toggle"]');

    toggle.should('not.be.checked');
    toggle.should('have.attr', 'aria-checked', 'false');
  });

  it('renders a checked Toggle', () => {
    cy.mount(<Toggle />);

    const toggle = cy.get('[data-test-id="toggle"]');

    toggle.click({ force: true });
    toggle.should('be.checked');
  });

  it('renders a Toggle with an aria-label', () => {
    const toggleProps = {
      'aria-label': 'Cats',
    };
    cy.mount(<Toggle {...toggleProps} />);

    cy.get('[data-test-id="toggle"]').should('have.attr', 'aria-label', 'Cats');
  });

  it('renders a Toggle with aria-labelledby', () => {
    const toggleProps = {
      'aria-labelledby': 'CatsId',
    };
    cy.mount(
      <div>
        <span id="CatsId">Cats</span>
        <Toggle {...toggleProps} />
      </div>
    );

    cy.get('[data-test-id="toggle"]').should('have.attr', 'aria-labelledby', 'CatsId');
  });

  it('renders a disabled Toggle', () => {
    const toggleProps = {
      disabled: true,
    };
    cy.mount(<Toggle {...toggleProps} />);

    cy.get('[data-test-id="toggle"]').should('be.disabled');
  });

  it('renders a Toggle with custom toggleText', () => {
    const toggleProps = {
      'aria-label': 'Cats',
      toggleOnText: 'Yas',
      toggleOffText: 'Nope',
    };
    cy.mount(<Toggle {...toggleProps} />);

    cy.contains('Yas');
    cy.contains('Nope');
  });

  it('calls onChange when toggled', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Toggle onChange={onChangeSpy} />);

    cy.get('[data-test-id="toggle"]').click({ force: true });
    cy.get('@onChangeSpy').should('have.been.calledOnce');
  });

  context('dark mode', () => {
    toggleDarkMode();

    it('is accessible', () => {
      cy.mount(
        <>
          <label htmlFor="toggle">label</label>
          <Toggle id="toggle" />
        </>
      );
      cy.checkA11y();
    });
  });
});
