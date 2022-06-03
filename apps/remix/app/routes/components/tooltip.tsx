import { Button } from '@launchpad-ui/button';
import { Tooltip } from '@launchpad-ui/tooltip';

export default function Index() {
  return (
    <Tooltip isOpen>
      <Button>Target</Button>
      <span>Content to show</span>
    </Tooltip>
  );
}
