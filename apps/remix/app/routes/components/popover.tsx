import { Button } from '@launchpad-ui/button';
import { Popover } from '@launchpad-ui/popover';

export default function Index() {
  return (
    <Popover isOpen>
      <Button>Target</Button>
      <div style={{ padding: '2rem' }}>Content to show</div>
    </Popover>
  );
}
