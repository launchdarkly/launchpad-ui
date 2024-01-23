import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { OverlayArrow, Popover, Dialog, DialogTrigger, Heading, Button } from '../src';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'React Aria Components/Popover',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ height: 'var(--lp-size-144)' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

const open = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    const body = canvasElement.ownerDocument.body;
    await expect(await within(body).findByRole('dialog'));
  },
};

export const Example: Story = {
  render: (args) => {
    return (
      <DialogTrigger>
        <Button>Trigger</Button>
        <Popover {...args}>
          <Dialog>Message</Dialog>
        </Popover>
      </DialogTrigger>
    );
  },
  ...open,
};

export const WithArrow: Story = {
  render: (args) => {
    return (
      <DialogTrigger>
        <Button>Trigger</Button>
        <Popover {...args}>
          <OverlayArrow />
          <Dialog>Message</Dialog>
        </Popover>
      </DialogTrigger>
    );
  },
  ...open,
};

export const WithHeading: Story = {
  render: (args) => {
    return (
      <DialogTrigger>
        <Button>Trigger</Button>
        <Popover {...args}>
          <Dialog>
            <Heading slot="title">Title</Heading>
            <div>Message</div>
          </Dialog>
        </Popover>
      </DialogTrigger>
    );
  },
  ...open,
};
