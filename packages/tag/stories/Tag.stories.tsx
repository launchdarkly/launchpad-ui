import type { StoryObj } from '@storybook/react';

import { Tag } from '../src';

export default {
  component: Tag,
  title: 'Components/Tag',
  description: 'Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__TAG,
    },
  },
};

type Story = StoryObj<typeof Tag>;

export const Example: Story = {
  args: {
    children: 'A lovely Tag component.',
    // arguments for your story
  },
};
