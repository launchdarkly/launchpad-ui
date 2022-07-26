import type { ComponentStoryObj } from '@storybook/react';

import { Pagination } from '../src';

export default {
  component: Pagination,
  title: 'Components/Pagination',
  description: 'Navigate through a paged list.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__PAGINATION,
    },
  },
};

type Story = ComponentStoryObj<typeof Pagination>;

export const Example: Story = {
  args: {
    children: 'A lovely Pagination component.',
    // arguments for your story
  },
};
