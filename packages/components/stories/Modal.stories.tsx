import type { Meta, StoryFn, StoryObj } from '@storybook/react';

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

export const Example: Story = {
  render: (args) => {
    return (
      <DialogTrigger>
        <Button>Trigger</Button>
        <ModalOverlay>
          <Modal {...args}>
            <Dialog>
              {({ close }) => (
                <>
                  <Heading slot="title">Title</Heading>
                  <IconButton
                    aria-label="close"
                    icon="cancel"
                    size="small"
                    variant="minimal"
                    onPress={close}
                  />
                  <div>Body text</div>
                </>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    );
  },
};
