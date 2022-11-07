import type { StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../.storybook/utils';
import { Popover } from '../src';

export default {
  component: Popover,
  title: 'Components/Popover',
  description: 'Popovers display content within a portal triggered by user interactions.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__POPOVER,
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
    (storyFn: () => ReactNode) => (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: [
      <Button key="1">Target</Button>,
      <div key="2" style={{ padding: '2rem' }}>
        Content to show
      </div>,
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  },
};
