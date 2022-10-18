import type { FilterProps } from '../src';

import { FilterTestWrapper } from './FilterTestWrapper';

const FILTER_BUTTON = '[data-test-id="filter-button"]';
const MENU_ITEM = '[data-test-id="menu-item"]';
const MENU_SEARCH = '[data-test-id="menu-search"]';

const createComponent = (props?: Partial<FilterProps>) => <FilterTestWrapper {...props} />;

describe('Filter', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.get(FILTER_BUTTON).should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });

  it('can select an option', () => {
    const options = [
      { name: 'one', value: '1' },
      { name: 'two', value: '2' },
    ];
    cy.mount(createComponent({ options }));

    cy.get(FILTER_BUTTON).click();
    cy.get(MENU_ITEM).first().click();

    cy.get(FILTER_BUTTON).should('have.text', 'author:one');
  });

  it('can search for an option', () => {
    const options = [
      { name: 'one', value: 'one' },
      { name: 'two', value: 'two' },
      { name: 'three', value: 'three' },
      { name: 'four', value: 'four' },
      { name: 'five', value: 'five' },
    ];
    cy.mount(createComponent({ options }));

    cy.get(FILTER_BUTTON).click();
    cy.get(MENU_SEARCH).should('be.visible');

    cy.get(MENU_SEARCH).type('fo');
    cy.get(MENU_ITEM).first().should('have.text', 'four');
  });

  it('can clear an applied filter', () => {
    const options = [
      { name: 'one', value: '1' },
      { name: 'two', value: '2' },
    ];
    cy.mount(createComponent({ options, isClearable: true }));

    cy.get(FILTER_BUTTON).click();
    cy.get(MENU_ITEM).first().click();
    cy.get(FILTER_BUTTON).should('have.text', 'author:one');

    cy.get('[data-test-id="clear-filter-button"]').click();
    cy.get(FILTER_BUTTON).should('have.text', 'author:osmo');
  });
});
