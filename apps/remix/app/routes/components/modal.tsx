import { Button, Modal } from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
  const [show, setShow] = useState(true);
  const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
  return show ? (
    <>
      {button}
      <Modal
        onCancel={() => setShow(!show)}
        title="Title"
        primaryButton={<Button onClick={() => setShow(false)}>Cancel</Button>}
      >
        <p>Body text</p>
      </Modal>
    </>
  ) : (
    button
  );
}
