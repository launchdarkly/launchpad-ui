import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Menu, MenuItem } from '@launchpad-ui/menu';

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
