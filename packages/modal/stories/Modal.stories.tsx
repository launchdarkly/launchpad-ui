/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { useState } from '@storybook/client-api';

import { Modal, ModalBody, ModalFooter, ModalHeader } from '../src';

export default {
  component: Modal,
  subcomponents: { ModalBody, ModalFooter, ModalHeader },
  title: 'Components/Modal',
  description: 'Modals presents users information and actions over a page.',
  parameters: {
    docs: {
      page: null,
    },
    status: {
      type: import.meta.env.PACKAGE_STATUS__MODAL,
    },
  },
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
    return show ? (
      <div style={{ width: '100vw', height: '100vh' }}>
        {button}
        <Modal onCancel={() => setShow(!show)}>
          <ModalHeader>Example modal title</ModalHeader>
          <ModalBody>Hi there I&apos;m a modal</ModalBody>
          <ModalFooter>
            <Button onClick={() => setShow(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    ) : (
      button
    );
  },
};
Default.parameters = { docs: { disable: true } };
