import type { ReactRenderer, StoryObj, StoryFn } from '@storybook/react';
import type { StoryContext } from '@storybook/types';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';

import { Tooltip } from '../src';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  description: 'Tooltips provide additional information on hover or focus.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__TOOLTIP,
    },
  },
  argTypes: {
    placement: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    onInteraction: {
      table: {
        category: 'Functions',
      },
    },
  },
  decorators: [
    (Story: StoryFn, context: StoryContext<ReactRenderer>) => (
      <div
        style={{
          width: context.globals.theme === 'side-by-side' ? '50w' : '100vw',
          height: context.globals.theme === 'side-by-side' ? '50vh' : '100vh',
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

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: [<Button key="1">Target</Button>, <span key="2">Content to show</span>],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    for (const button of canvas.getAllByRole('button')) {
      await userEvent.hover(button);
    }
  },
};
