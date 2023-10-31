import type { StoryObj } from '@storybook/react';

import { Box } from '../src';

export default {
  component: Box,
  title: 'Components/Box',
  description: '',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__BOX,
    },
  },
};

type Story = StoryObj<typeof Box>;

export const Example: Story = {
  args: {
    bg: '$black.100',
    color: '$white.0',
    padding: '$400',
    width: '$400',
    children: 'I am a box',
  },
};
