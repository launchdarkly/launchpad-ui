import { Button, Drawer, DrawerHeader } from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
  const [show, setShow] = useState(true);
  const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
  return show ? (
    <>
      {button}
      <Drawer onCancel={() => setShow(!show)}>
        <section>
          <DrawerHeader>Example modal title</DrawerHeader>
        </section>
        <section>
          <Button onClick={() => setShow(false)}>Cancel</Button>
        </section>
      </Drawer>
    </>
  ) : (
    button
  );
}
