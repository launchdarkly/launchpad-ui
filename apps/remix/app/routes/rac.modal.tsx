import { ModalOverlay, Modal, Dialog, DialogTrigger, Button } from '@launchpad-ui/components';

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
