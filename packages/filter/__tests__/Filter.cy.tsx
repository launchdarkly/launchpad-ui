import type { FilterProps } from '../src';

import { FilterTestWrapper } from './FilterTestWrapper';

const createComponent = (props?: Partial<FilterProps>) => <FilterTestWrapper {...props} />;

describe('Filter', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.get('[data-test-id="filter-button"]').should('be.visible');
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

    cy.get('[data-test-id="filter-button"]').click();
    cy.get('[data-test-id="menu-item"]').first().click();

    cy.get('[data-test-id="filter-button"]').should('have.text', 'author:one');
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

    cy.get('[data-test-id="filter-button"]').click();

    const searchInput = cy.get('[data-test-id="menu-search"]');
    searchInput.should('be.visible');

    searchInput.type('fo');
    cy.get('[data-test-id="menu-item"]').first().should('have.text', 'four');
  });

  it('can clear an applied filter', () => {
    const options = [
      { name: 'one', value: '1' },
      { name: 'two', value: '2' },
    ];
    cy.mount(createComponent({ options, isClearable: true }));

    cy.get('[data-test-id="filter-button"]').click();
    cy.get('[data-test-id="menu-item"]').first().click();
    cy.get('[data-test-id="filter-button"]').should('have.text', 'author:one');

    cy.get('[data-test-id="clear-filter-button"]').click();
    cy.get('[data-test-id="filter-button"]').should('have.text', 'author:osmo');
  });
});
