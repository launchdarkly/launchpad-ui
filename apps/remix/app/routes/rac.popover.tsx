import { Button, Dialog, DialogTrigger, OverlayArrow, Popover } from '@launchpad-ui/components';

export default function Index() {
  return (
    <DialogTrigger>
      <Button>Trigger</Button>
      <Popover isOpen>
        <OverlayArrow />
        <Dialog>Message</Dialog>
      </Popover>
    </DialogTrigger>
  );
}
