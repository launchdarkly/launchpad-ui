import { ButtonKind, SplitButton, Menu, MenuItem } from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
  const [open, setOpen] = useState(true);
  return (
    <SplitButton
      kind={ButtonKind.DEFAULT}
      onClickMainButton={() => undefined}
      onSelect={() => undefined}
      name="test"
      isOpen={open}
      onInteraction={() => setOpen(!open)}
    >
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Menu>
    </SplitButton>
  );
}
