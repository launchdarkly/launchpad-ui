import type { ComponentStoryObj } from '@storybook/react';

import { FilterButton } from '../src';

export default {
  component: FilterButton,
  title: 'Components/Filter/FilterButton',
  description: 'filter a list of results',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__FILTER,
    },
  },
};

type Story = ComponentStoryObj<typeof FilterButton>;

export const Basic: Story = {
  args: {
    name: 'Filter by Name',
  },
};

export const IconOnly: Story = {
  args: {
    name: 'Filter by Name',
    hideName: true,
  },
};

export const Clearable: Story = {
  args: {
    name: 'Filter by Name',
    isClearable: true,
  },
};
