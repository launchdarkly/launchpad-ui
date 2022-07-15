import type { ComponentStoryObj, Story } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../.storybook/utils';
import { Tooltip } from '../src';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  description: 'Tooltips provide additional information on hover or focus.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__TOOLTIP,
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
    (Story: Story) => (
      <div
        style={{
          width: '100vw',
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

type StoryType = ComponentStoryObj<typeof Tooltip>;

export const Default: StoryType = {
  args: {
    children: [<Button key="1">Target</Button>, <span key="2">Content to show</span>],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  },
};
