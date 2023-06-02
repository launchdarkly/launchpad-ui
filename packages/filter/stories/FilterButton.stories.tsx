import type { StoryObj } from '@storybook/react';

import { FilterButton } from '../src';

export default {
  component: FilterButton,
  title: 'Components/Filter/FilterButton',
  description:
    "When the Filter component doesn't suffice, construct your own custom filter using the FilterButton.",
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FILTER,
    },
  },
};

type Story = StoryObj<typeof FilterButton>;

export const Basic: Story = {
  args: {
    name: 'Author',
    children: 'Osmo',
  },
};

export const WithNameOnly: Story = {
  args: {
    name: 'Author',
  },
};

export const WithDescriptionOnly: Story = {
  args: {
    name: 'Author',
    hideName: true,
    children: 'Osmo',
  },
};

export const WithIconOnly: Story = {
  args: {
    name: 'Author',
    hideName: true,
  },
};

export const WithClearButton: Story = {
  args: {
    name: 'Author',
    children: 'Osmo',
    isClearable: true,
  },
};

export const WithClearButtonCustomTooltip: Story = {
  args: {
    name: 'Author',
    children: 'Osmo',
    isClearable: true,
    clearTooltip: <span>custom message goes here</span>,
  },
};
