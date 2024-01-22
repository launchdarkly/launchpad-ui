import { Button, Tooltip, TooltipTrigger } from '@launchpad-ui/components';

export default function Index() {
  return (
    <TooltipTrigger>
      <Button>Trigger</Button>
      <Tooltip isOpen>Message</Tooltip>
    </TooltipTrigger>
  );
}
