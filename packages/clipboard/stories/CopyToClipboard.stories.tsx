import type { Story } from '@storybook/react';

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

export const Default = {
  args: { text: 'Code content', children: <code>Code content</code> },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.hover(canvas.getByRole('button'));
    await userEvent.click(canvas.getByRole('button'));
    await sleep(500);
  },
};
