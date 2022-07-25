import type { ComponentStoryObj } from '@storybook/react';

import { Slot } from '../src';

export default {
  component: Slot,
  title: 'Components/Slot',
  description: 'Merges its props onto its immediate child.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__SLOT,
    },
  },
};

type Story = ComponentStoryObj<typeof Slot>;

export const Example: Story = {
  args: {
    children: 'A lovely Slot component.',
    // arguments for your story
  },
};
