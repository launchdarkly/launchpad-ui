import type { Meta, StoryFn, StoryObj, ReactRenderer } from '@storybook/react';
import type { PlayFunction } from '@storybook/types';

import { expect, userEvent, within } from '@storybook/test';

import { allModes } from '../../../.storybook/modes';
import { Modal, ModalOverlay, Button, Dialog, DialogTrigger, Heading, IconButton } from '../src';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'React Aria Components/Modal',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Modal>;

const renderModal = (args: Story['args']) => (
  <DialogTrigger>
    <Button>Trigger</Button>
    <ModalOverlay>
      <Modal {...args}>
        <Dialog>
          {({ close }) => (
            <>
              <div slot="header">
                <Heading slot="title">Title</Heading>
                <IconButton
                  aria-label="close"
                  icon="cancel"
                  size="small"
                  variant="minimal"
                  onPress={close}
                />
              </div>
              <div slot="body">Body text</div>
              <div slot="footer">
                <Button onPress={close}>Cancel</Button>
                <Button variant="primary">Confirm</Button>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  </DialogTrigger>
);

const play: PlayFunction<ReactRenderer> = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));
  const body = canvasElement.ownerDocument.body;
  await expect(await within(body).findByRole('dialog'));
};

export const Example: Story = {
  render: (args) => renderModal(args),
  play,
  parameters: {
    chromatic: {
      modes: {
        mobile: allModes.mobile,
      },
    },
  },
};

export const Drawer: Story = {
  render: (args) => renderModal({ variant: 'drawer', ...args }),
  play,
  parameters: {
    chromatic: {
      modes: {
        mobile: allModes.mobile,
      },
    },
  },
};
