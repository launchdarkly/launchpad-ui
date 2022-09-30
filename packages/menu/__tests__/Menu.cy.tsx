import type { MenuProps } from '../src';

import { Menu, MenuDivider, MenuItem, MenuSearch } from '../src';

const createComponent = (props?: MenuProps<string>) => (
  <Menu<string> {...props}>
    <MenuSearch />
    <MenuItem item="one">one</MenuItem>
    <MenuItem item="two" disabled>
      two
    </MenuItem>
    <MenuItem item="three">three</MenuItem>
    <MenuDivider />
    <MenuItem item="four">four</MenuItem>
  </Menu>
);

describe('Menu', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.get('[data-test-id="menu"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });
});
