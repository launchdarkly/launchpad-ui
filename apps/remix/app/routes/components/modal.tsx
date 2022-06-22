import { Button } from '@launchpad-ui/button';
import { Modal, ModalBody, ModalFooter, ModalHeader, Prompt } from '@launchpad-ui/modal';
import { useState } from 'react';

export default function Index() {
  const [show, setShow] = useState(true);
  const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
  return show ? (
    <>
      {button}
      <Prompt>
        <Modal
          transition="pop"
          withCloseButton
          cancelWithOverlayClick
          onCancel={() => setShow(!show)}
        >
          <ModalHeader>Example modal title</ModalHeader>
          <ModalBody>Hi there I&apos;m a modal</ModalBody>
          <ModalFooter>
            <Button onClick={() => setShow(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Prompt>
    </>
  ) : (
    button
  );
}
