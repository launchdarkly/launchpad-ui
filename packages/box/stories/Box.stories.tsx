import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';

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
    bg: { lightMode: '$black.100', darkMode: '$gray.700' },
    color: '$white.0',
    padding: '$400',
    width: '$400',
    children: 'I am a box',
  },
};

export const Composition: Story = {
  args: {
    background: '$yellow-cyan',
    borderColor: '$cyan.500',
    color: '$black.0',
    asChild: true,
    children: <Button>Button</Button>,
  },
};
