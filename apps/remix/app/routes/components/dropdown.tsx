import { Dropdown, DropdownButton, Menu, MenuItem } from '@launchpad-ui/core';

export default function Index() {
  return (
    <Dropdown>
      <DropdownButton>Target</DropdownButton>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Dropdown>
  );
}
