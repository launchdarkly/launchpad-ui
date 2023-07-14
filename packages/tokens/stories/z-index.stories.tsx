import type { ToastRecord } from '@launchpad-ui/toast';
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { Drawer, DrawerHeader } from '@launchpad-ui/drawer';
import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@launchpad-ui/modal';
import { ToastCenter } from '@launchpad-ui/toast';
import { useState } from '@storybook/client-api';

export default {
  title: 'Tokens/Z Index',
};

export const Example: StoryObj = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [showModal, setShowModal] = useState(true);
    const [showDrawer, setShowDrawer] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const [toasts, setToasts] = useState<ToastRecord[]>([
      { _id: '1', kind: 'success', content: 'z-index-900' },
    ]);
    /* eslint-enable react-hooks/rules-of-hooks */

    const button = <Button onClick={() => setShowDrawer(true)}>Open drawer</Button>;
    const modalButton = <Button onClick={() => setShowModal(true)}>Open modal</Button>;

    return (
      <>
        {showDrawer ? (
          <>
            {button}
            <Drawer onCancel={() => setShowDrawer(!showDrawer)}>
              <section>
                <DrawerHeader>Example drawer title</DrawerHeader>
              </section>
              <section>
                <p>z-index-500</p>
                {modalButton}
              </section>
            </Drawer>
          </>
        ) : (
          button
        )}
        {showModal ? (
          <Modal onCancel={() => setShowModal(!showModal)}>
            <ModalHeader title="Example modal title" />
            <ModalBody>
              <div>
                <p>z-index-500</p>
              </div>
              <Dropdown
                isOpen={isDropdownOpen}
                onInteraction={(isOpen) => setIsDropdownOpen(isOpen)}
              >
                <DropdownButton>Dropdown</DropdownButton>
                <Menu>
                  <MenuItem tooltip="z-index-800" tooltipPlacement="right">
                    z-index-700
                  </MenuItem>
                  <MenuItem>Item 2</MenuItem>
                  <MenuItem>Item 3</MenuItem>
                </Menu>
              </Dropdown>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
            </ModalFooter>
          </Modal>
        ) : null}
        <ToastCenter toasts={toasts} onDismiss={() => setToasts([])} />
      </>
    );
  },
};
Example.parameters = { docs: { disable: true } };
