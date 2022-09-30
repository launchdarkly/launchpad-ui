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
    cy.get('[data-test-id="dropdown-button"]').click();
    cy.get('[data-test-id="dropdown"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </Dropdown>
    );
    cy.get('[data-test-id="dropdown-button"]').click();

    // wait for animation to finish
    cy.wait(200);
    cy.checkA11y();
  });
});
