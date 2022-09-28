import type { NavigationItemProps } from '../src';

import { MemoryRouter } from 'react-router-dom';

import { Navigation, NavigationItem } from '../src';

const createComponent = (items: NavigationItemProps[]) => (
  <MemoryRouter>
    <Navigation items={items} title="nav" kind="primary">
      {(item) => (
        <NavigationItem
          key={item.to}
          name={item.name}
          to={item.to}
          tooltip={item.tooltip}
          tooltipContent={item.tooltipContent}
          status={item.status}
        />
      )}
    </Navigation>
  </MemoryRouter>
);

describe('Navigation', () => {
  it('renders', () => {
    cy.mount(
      createComponent([
        {
          name: 'First',
          to: '/first',
        },
        {
          name: 'Second',
          to: '/second',
        },
      ])
    );
    cy.get('[data-test-id="navigation"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      createComponent([
        {
          name: 'First',
          to: '/first',
        },
        {
          name: 'Second',
          to: '/second',
        },
      ])
    );
    cy.checkA11y();
  });

  it('renders as a dropdown menu when viewport is small', () => {
    cy.mount(
      createComponent([
        {
          name: 'First',
          to: '/first',
        },
        {
          name: 'Second',
          to: '/second',
        },
        {
          name: 'Third',
          to: '/third',
        },
        {
          name: 'Fourth',
          to: '/fourth',
        },
      ])
    );
    cy.viewport(320, 500);

    cy.contains('nav').click();
    cy.get('[role="menu"]').should('be.visible');
  });
});
