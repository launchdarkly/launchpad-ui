import {
  SplitButton,
  SplitButtonDropdown,
  SplitButtonDropdownButton,
  SplitButtonMainButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
  const [open, setOpen] = useState(true);

  const handleSelect = (val: object | string | number) => {
    alert(JSON.stringify(val));
    setOpen(!open);
  };

  return (
    <SplitButton>
      <Tooltip content="Main tooltip">
        <SplitButtonMainButton>Save changes</SplitButtonMainButton>
      </Tooltip>
      <SplitButtonDropdown
        isOpen={open}
        onInteraction={() => setOpen(!open)}
        onSelect={handleSelect}
      >
        <Tooltip content="Dropdown tooltip">
          <SplitButtonDropdownButton />
        </Tooltip>
        <Menu>
          <MenuItem item={{ key: 'Saved changes' }}>Save changes</MenuItem>
          <MenuItem item={{ key: 'Saved with comment' }}>Save with comment</MenuItem>
        </Menu>
      </SplitButtonDropdown>
    </SplitButton>
  );
}
