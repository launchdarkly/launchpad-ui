import { ButtonKind, SplitButton, Menu, MenuItem } from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
  const [open, setOpen] = useState(true);

  const handleSelect = (val: object) => {
    alert(JSON.stringify(val));
    setOpen(!open);
  };

  return (
    <SplitButton
      kind={ButtonKind.DEFAULT}
      onClickMainButton={() => undefined}
      onSelect={handleSelect}
      name="test"
      isOpen={open}
      onInteraction={() => setOpen(!open)}
    >
      <Menu>
        <MenuItem item={{ name: 'one' }}>Item 1</MenuItem>
        <MenuItem item={{ name: 'two' }}>Item 2</MenuItem>
      </Menu>
    </SplitButton>
  );
}
