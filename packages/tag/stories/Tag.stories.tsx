import type { StoryObj } from '@storybook/react';
import { useState } from 'react';

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

const MOCK_ITEMS = [
  { id: 1, name: 'News' },
  { id: 2, name: 'Travel' },
  { id: 3, name: 'Gaming' },
  { id: 4, name: 'Shopping' },
  { id: 5, name: 'Sports' },
  { id: 6, name: 'Music' },
  { id: 7, name: 'Documentaries' },
  { id: 8, name: 'History' },
];

export const Basic: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_ITEMS);

      return (
        <TagGroup
          allowsRemoving
          onRemove={(key) => {
            setItems((prevItems) => prevItems.filter((item) => key !== item.id));
          }}
          items={items}
          actionLabel="Clear"
          onAction={() => alert('Clear action pressed.')}
        >
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      );
    };

    return <Component />;
  },
};

export const WithMaxRows: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_ITEMS);

      return (
        <div style={{ maxWidth: 350 }}>
          <TagGroup
            allowsRemoving
            maxRows={2}
            onRemove={(key) => {
              setItems((prevItems) => prevItems.filter((item) => key !== item.id));
            }}
            items={items}
          >
            {(item) => <TagItem>{item.name}</TagItem>}
          </TagGroup>
        </div>
      );
    };

    return <Component />;
  },
};
