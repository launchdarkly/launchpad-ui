import { Popover, Menu, MenuItem, MenuTrigger, Button } from '@launchpad-ui/components';

export default function Index() {
  return (
    <MenuTrigger>
      <Button>Trigger</Button>
      <Popover isOpen>
        <Menu>
          <MenuItem>Item one</MenuItem>
          <MenuItem>Item two</MenuItem>
          <MenuItem>Item three</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
