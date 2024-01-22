import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';
import isChromatic from 'chromatic';

import { Tooltip, TooltipTrigger, Button } from '../src';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'React Aria Components/Tooltip',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ height: isChromatic() ? 'var(--lp-size-320)' : undefined }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Example: Story = {
  render: (args) => {
    return (
      <TooltipTrigger>
        <Button>Trigger</Button>
        <Tooltip {...args}>Message</Tooltip>
      </TooltipTrigger>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await userEvent.hover(canvas.getByRole('button'));
  },
};
