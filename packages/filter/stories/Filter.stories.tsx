import type { ComponentStoryObj } from '@storybook/react';

import { Filter } from '../src';

export default {
  component: Filter,
  title: 'Components/Filter',
  description: 'filter a list of results',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__FILTER,
    },
  },
};

type Story = ComponentStoryObj<typeof Filter>;

export const Example: Story = {
  args: {
    children: 'A lovely Filter component.',
    // arguments for your story
  },
};
