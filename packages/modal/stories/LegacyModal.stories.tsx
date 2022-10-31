/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { useState } from '@storybook/client-api';

import { LegacyModal, LegacyModalBody, LegacyModalFooter, LegacyModalHeader } from '../src';

export default {
  component: LegacyModal,
  subcomponents: { LegacyModalBody, LegacyModalFooter, LegacyModalHeader },
  title: 'Components/LegacyModal',
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

type Story = StoryObj<typeof LegacyModal>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
    return show ? (
      <div style={{ width: '100vw', height: '100vh' }}>
        {button}
        <LegacyModal onCancel={() => setShow(!show)}>
          <LegacyModalHeader>Example modal title</LegacyModalHeader>
          <LegacyModalBody>Hi there I&apos;m a modal</LegacyModalBody>
          <LegacyModalFooter>
            <Button onClick={() => setShow(false)}>Cancel</Button>
          </LegacyModalFooter>
        </LegacyModal>
      </div>
    ) : (
      button
    );
  },
};
Default.parameters = { docs: { disable: true } };
