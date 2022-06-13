/* eslint-disable react-hooks/rules-of-hooks */
import type { ComponentStoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { useState } from '@storybook/client-api';

import { ModalBody, ModalFooter, ModalHeader, ModalSheet, ModalTransition, Prompt } from '../src';

export default {
  component: ModalTransition,
  subcomponents: { ModalBody, ModalFooter, ModalHeader, ModalSheet, Prompt },
  title: 'Components/Modal',
  description: 'Modals presents users information and actions over a page.',
  parameters: {
    docs: {
      page: null,
    },
  },
};

type Story = ComponentStoryObj<typeof ModalTransition>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
    return show ? (
      <div style={{ width: '100vw', height: '100vh' }}>
        {button}
        <Prompt>
          <ModalTransition
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
          </ModalTransition>
        </Prompt>
      </div>
    ) : (
      button
    );
  },
};
Default.parameters = { docs: { disable: true } };

export const Sheet: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
    return show ? (
      <div style={{ width: '100vw', height: '100vh' }}>
        {button}

        <ModalSheet withCloseButton onCancel={() => setShow(!show)}>
          <section>
            <ModalHeader>Example modal title</ModalHeader>
          </section>
        </ModalSheet>
      </div>
    ) : (
      button
    );
  },
};
Sheet.parameters = { docs: { disable: true } };
