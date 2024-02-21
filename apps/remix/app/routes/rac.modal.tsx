import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from '@launchpad-ui/components';

export default function Index() {
  return (
    <DialogTrigger>
      <Button>Trigger</Button>
      <ModalOverlay isOpen>
        <Modal isOpen>
          <Dialog>Modal</Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
