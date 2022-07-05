import { Button, Popover } from '@launchpad-ui/core';

export default function Index() {
  return (
    <Popover isOpen>
      <Button>Target</Button>
      <div style={{ padding: '2rem' }}>Content to show</div>
    </Popover>
  );
}
