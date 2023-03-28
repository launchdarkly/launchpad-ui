import { toggleDarkMode } from '../../../cypress/utils/dark-mode';
import { Toggle } from '../src';

const TOGGLE = 'toggle';

describe('Toggle', () => {
  it('renders', () => {
    cy.mount(<Toggle />);
    cy.getByTestId(TOGGLE).should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <>
        <Toggle aria-label="toggle" />
      </>
    );
    cy.checkA11y();
  });

  it('can be reached with the keyboard', () => {
    cy.mount(<Toggle defaultSelected={false} />);

    cy.getByTestId(TOGGLE).focus();
    cy.getByTestId(TOGGLE).type(' ');
  });

  it('renders an unchecked Toggle', () => {
    cy.mount(<Toggle isSelected={false} />);

    cy.getByTestId(TOGGLE).should('not.be.checked');
    cy.getByTestId(TOGGLE).should('not.have.attr', 'checked', '');
  });

  it('renders a checked Toggle', () => {
    cy.mount(<Toggle isSelected />);

    cy.getByTestId(TOGGLE).should('be.checked');
  });

  it('renders a Toggle with an aria-label', () => {
    const toggleProps = {
      'aria-label': 'Cats',
    };
    cy.mount(<Toggle {...toggleProps} />);

    cy.getByTestId(TOGGLE).should('have.attr', 'aria-label', 'Cats');
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

    cy.getByTestId(TOGGLE).should('have.attr', 'aria-labelledby', 'CatsId');
  });

  it('renders a disabled Toggle', () => {
    cy.mount(<Toggle isDisabled />);

    cy.getByTestId(TOGGLE).should('be.disabled');
  });

  it('calls onChange when toggled', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Toggle onChange={onChangeSpy} />);

    cy.getByTestId(TOGGLE).click({ force: true });
    cy.get('@onChangeSpy').should('have.been.calledOnce');
  });

  context('dark mode', () => {
    toggleDarkMode();

    it('is accessible', () => {
      cy.mount(
        <>
          <Toggle aria-label="toggle" />
        </>
      );
      cy.checkA11y();
    });
  });
});
