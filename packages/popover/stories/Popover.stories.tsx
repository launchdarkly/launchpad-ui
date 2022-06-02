import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';

import { Popover } from '../src';

export default {
  component: Popover,
  title: 'Components/Popover',
  description: 'Popovers display content within a portal triggered by user interactions.',
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
};

export const Default = {
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
    await userEvent.click(canvas.getByRole('button'));
  },
};
