import type { StoryObj } from '@storybook/react';

import { ContactPage, FlairIcon } from '../src';

export default {
  component: FlairIcon,
  title: 'Components/FlairIcon',
  description:
    'Flair icons can be used as either square or circular icons with gradient backgrounds.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__ICONS,
    },
  },
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
  },
};

type Story = StoryObj<typeof FlairIcon>;

export const Circular: Story = {
  args: { children: <ContactPage />, isRounded: true },
};

export const BlueToPurple: Story = {
  args: { children: <ContactPage />, gradient: 'purpleToBlue' },
};

export const YellowToCyan: Story = {
  args: { children: <ContactPage />, gradient: 'yellowToCyan' },
};

export const PinkToPurple: Story = {
  args: { children: <ContactPage />, gradient: 'pinkToPurple' },
};

export const CyanToBlue: Story = {
  args: { children: <ContactPage />, gradient: 'cyanToBlue' },
};

export const CyanToPurple: Story = {
  args: { children: <ContactPage />, gradient: 'cyanToPurple' },
};
