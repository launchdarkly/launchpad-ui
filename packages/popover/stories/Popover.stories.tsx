import type { StoryObj, StoryFn } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';

import { Popover } from '../src';

export default {
  component: Popover,
  title: 'Components/Popover',
  description: 'Popovers display content within a portal triggered by user interactions.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__POPOVER,
    },
  },
  argTypes: {
    placement: {
      table: {
        category: 'Presentation',
      },
    },
    interactionKind: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    onClick: {
      table: {
        category: 'Functions',
      },
    },
    onClose: {
      table: {
        category: 'Functions',
      },
    },
    onInteraction: {
      table: {
        category: 'Functions',
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div
        style={{
          height: '100vh',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: [
      <Button key="1">Target</Button>,
      <div key="2" style={{ padding: '1.25rem' }}>
        Content to show
      </div>,
    ],
    interactionKind: 'hover-or-focus',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    for (const button of canvas.getAllByRole('button')) {
      await userEvent.hover(button);
    }
  },
};
