import type { FilterProps } from '../src';

import { FilterTestWrapper } from './FilterTestWrapper';

const createComponent = (props?: Partial<FilterProps>) => <FilterTestWrapper {...props} />;

describe('Filter', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.get('[data-test-id="filter"]').should('be.visible');
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

    cy.get('.Filter-button').click();
    cy.get('.Menu-item').first().click();

    cy.get('[data-test-id="filter"]').should('have.text', 'author:one');
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

    cy.get('.Filter-button').click();
    cy.get('.Menu-search').should('be.visible');

    cy.get('input.Menu-search-input').type('fo');
    cy.get('.Menu-item').first().should('have.text', 'four');
  });

  it('can clear an applied filter', () => {
    const options = [
      { name: 'one', value: '1' },
      { name: 'two', value: '2' },
    ];
    cy.mount(createComponent({ options, isClearable: true }));

    cy.get('.Filter-button').click();
    cy.get('.Menu-item').first().click();
    cy.get('[data-test-id="filter"]').should('have.text', 'author:one');

    cy.get('.Filter-clear').click();
    cy.get('[data-test-id="filter"]').should('have.text', 'author:osmo');
  });
});
