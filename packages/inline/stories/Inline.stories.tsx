import type { StoryObj } from '@storybook/react';

import { Inline } from '../src';

export default {
  component: Inline,
  title: 'Components/Inline',
  description: 'An element used to add horizontal space between components.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__INLINE,
    },
  },
};

type Story = StoryObj<typeof Inline>;

export const Example: Story = {
  args: {
    children: 'A lovely Inline component.',
    // arguments for your story
  },
};
