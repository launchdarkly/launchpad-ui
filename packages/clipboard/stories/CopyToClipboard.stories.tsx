import type { ComponentStoryObj, Story } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../.storybook/utils';
import { CopyToClipboard } from '../src';

import './CopyToClipboard.stories.css';

export default {
  component: CopyToClipboard,
  title: 'Components/CopyToClipboard',
  description: 'Clipboards copy text to the clipboard.',
  argTypes: {
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

type StoryType = ComponentStoryObj<typeof CopyToClipboard>;

export const Default: StoryType = {
  args: { text: 'Code content', children: <code>Code content</code> },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  },
};
