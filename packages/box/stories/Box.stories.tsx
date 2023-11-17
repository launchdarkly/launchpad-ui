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
    backgroundColor: { default: '$black.800', dark: '$gray.700' },
    color: '$white.950',
    padding: { desktop: '$400', tablet: '$300', mobile: '$200' },
    width: { desktop: '$400', tablet: '$256', mobile: '$192' },
    children: 'I am a box',
  },
};

export const Composition: Story = {
  args: {
    background: '$yellow-cyan',
    borderColor: '$cyan.500',
    color: '$black.900',
    asChild: true,
    children: <Button>Button</Button>,
  },
};
