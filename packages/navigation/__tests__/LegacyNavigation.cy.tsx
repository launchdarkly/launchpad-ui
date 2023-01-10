import type { LegacyNavigationItemProps } from '../src';

import { MemoryRouter } from 'react-router-dom';

import { LegacyNavigation, LegacyNavigationItem } from '../src';

const createComponent = (items: LegacyNavigationItemProps[]) => (
  <MemoryRouter>
    <LegacyNavigation items={items} title="nav" kind="primary">
      {(item) => (
        <LegacyNavigationItem
          key={item.to}
          name={item.name}
          to={item.to}
          tooltip={item.tooltip}
          tooltipContent={item.tooltipContent}
          status={item.status}
        />
      )}
    </LegacyNavigation>
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
    cy.getByTestId('navigation').should('be.visible');
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

  context('mobile viewport', () => {
    beforeEach(() => {
      cy.viewport(320, 500);
    });

    it('renders as a dropdown menu', () => {
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

      cy.getByTestId('navigation-menu-button').should('be.visible');
    });
  });
});
