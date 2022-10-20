import { Menu, MenuItem } from '@launchpad-ui/menu';

import { Dropdown, DropdownButton } from '../src';

describe('Dropdown', () => {
  it('renders', () => {
    cy.mount(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </Dropdown>
    );
    cy.getByTestId('dropdown-button').click();
    cy.getByTestId('dropdown').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Dropdown isOpen>
        <DropdownButton>Target</DropdownButton>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </Dropdown>
    );
    cy.checkA11y();
  });
});
