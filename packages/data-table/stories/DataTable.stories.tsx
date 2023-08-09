import type { StoryObj } from '@storybook/react';

import { DataTable } from '../src';

export default {
  component: DataTable,
  title: 'Components/DataTable',
  description: 'An element used to display data in rows and columns.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__DATA_TABLE,
    },
  },
};

type Story = StoryObj<typeof DataTable>;

export const Example: Story = {
  args: {
    children: 'A lovely DataTable component.',
    // arguments for your story
  },
};
