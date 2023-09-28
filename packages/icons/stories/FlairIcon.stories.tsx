import type { StoryObj } from '@storybook/react';

import { Icon, FlairIcon } from '../src';

export default {
  component: FlairIcon,
  title: 'Components/Icon/FlairIcon',
  description:
    'Flair icons can be used as either square or circular icons with gradient backgrounds.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
    },
  },
};

type Story = StoryObj<typeof FlairIcon>;

export const Circular: Story = {
  args: { children: <Icon name="chat-bubble" />, isRounded: true },
};

export const BlueToPurple: Story = {
  args: { children: <Icon name="star" />, gradient: 'purpleToBlue' },
};

export const YellowToCyan: Story = {
  args: { children: <Icon name="flag" />, gradient: 'yellowToCyan' },
};

export const PinkToPurple: Story = {
  args: { children: <Icon name="edit" />, gradient: 'pinkToPurple' },
};

export const CyanToBlue: Story = {
  args: { children: <Icon name="thumb-up" />, gradient: 'cyanToBlue' },
};

export const CyanToPurple: Story = {
  args: { children: <Icon name="warning" />, gradient: 'cyanToPurple' },
};
