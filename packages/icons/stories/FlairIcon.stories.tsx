import type { StoryObj } from '@storybook/react';

import { ContactPage, Edit, Flag, FlairIcon, SupportAgent, ThumbUp, Warning } from '../src';

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
  args: { children: <ContactPage />, isRounded: true },
};

export const BlueToPurple: Story = {
  args: { children: <SupportAgent />, gradient: 'purpleToBlue' },
};

export const YellowToCyan: Story = {
  args: { children: <Flag />, gradient: 'yellowToCyan' },
};

export const PinkToPurple: Story = {
  args: { children: <Edit />, gradient: 'pinkToPurple' },
};

export const CyanToBlue: Story = {
  args: { children: <ThumbUp />, gradient: 'cyanToBlue' },
};

export const CyanToPurple: Story = {
  args: { children: <Warning />, gradient: 'cyanToPurple' },
};
