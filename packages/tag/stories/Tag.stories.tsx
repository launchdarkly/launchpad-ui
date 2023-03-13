import type { StoryObj } from '@storybook/react';

import { TagGroup, TagItem } from '../src';

export default {
  component: TagGroup,
  title: 'Components/TagGroup',
  description:
    'Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__TAG,
    },
  },
};

type Story = StoryObj<typeof TagGroup>;

export const Basic: Story = {
  render: () => {
    return (
      <TagGroup>
        <TagItem>News</TagItem>
        <TagItem>Travel</TagItem>
        <TagItem>Gaming</TagItem>
        <TagItem>Shopping</TagItem>
      </TagGroup>
    );
  },
  parameters: { docs: { disable: false } },
};
