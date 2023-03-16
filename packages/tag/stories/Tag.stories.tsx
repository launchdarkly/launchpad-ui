import type { StoryObj } from '@storybook/react';

import { IconButton } from '@launchpad-ui/button';
import { Edit, Star } from '@launchpad-ui/icons';
import { useState } from 'react';

import { MOCK_TAGS } from '../__tests__/constants';
import { TagGroup, TagGroupClearAction, TagItem } from '../src';

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

export const ReadOnly: Story = {
  render: () => {
    return <TagGroup items={MOCK_TAGS}>{(item) => <TagItem>{item.name}</TagItem>}</TagGroup>;
  },
};

export const ReadOnlySmall: Story = {
  render: () => {
    return (
      <TagGroup size="small" items={MOCK_TAGS}>
        {(item) => <TagItem>{item.name}</TagItem>}
      </TagGroup>
    );
  },
};

export const Removable: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_TAGS);

      return (
        <TagGroup
          allowsRemoving
          onRemove={(key) => {
            setItems((prevItems) => prevItems.filter((item) => key !== item.id));
          }}
          items={items}
        >
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      );
    };

    return <Component />;
  },
};

export const RemovableSmall: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_TAGS);

      return (
        <TagGroup
          size="small"
          allowsRemoving
          onRemove={(key) => {
            setItems((prevItems) => prevItems.filter((item) => key !== item.id));
          }}
          items={items}
        >
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      );
    };

    return <Component />;
  },
};

export const WithClearAction: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_TAGS);

      return (
        <TagGroup
          allowsRemoving
          onRemove={(key) => {
            setItems((prevItems) => prevItems.filter((item) => key !== item.id));
          }}
          hideActionWhenEmpty
          items={items}
          action={(props) => <TagGroupClearAction {...props} onClick={() => setItems([])} />}
        >
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      );
    };

    return <Component />;
  },
};

export const WithClearActionSmall: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_TAGS);

      return (
        <TagGroup
          allowsRemoving
          onRemove={(key) => {
            setItems((prevItems) => prevItems.filter((item) => key !== item.id));
          }}
          size="small"
          hideActionWhenEmpty
          items={items}
          action={(props) => <TagGroupClearAction {...props} onClick={() => setItems([])} />}
        >
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      );
    };

    return <Component />;
  },
};

export const WithCustomAction: Story = {
  render: () => {
    const Component = () => {
      const [items, setItems] = useState(MOCK_TAGS);

      return (
        <TagGroup
          allowsRemoving
          onRemove={(key) => {
            setItems((prevItems) => prevItems.filter((item) => key !== item.id));
          }}
          hideActionWhenEmpty
          items={items}
          action={(props) => (
            <IconButton
              {...props}
              aria-label="Clear"
              size="small"
              icon={<Edit />}
              onClick={() => setItems([])}
            />
          )}
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
    return (
      <div style={{ maxWidth: 290, border: '1px solid #efefef', padding: '1rem' }}>
        <TagGroup maxRows={2} items={MOCK_TAGS}>
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      </div>
    );
  },
};

export const WithMaxRowsSmall: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: 290, border: '1px solid #efefef', padding: '1rem' }}>
        <TagGroup maxRows={2} items={MOCK_TAGS} size="small">
          {(item) => <TagItem>{item.name}</TagItem>}
        </TagGroup>
      </div>
    );
  },
};

export const WithTooltips: Story = {
  render: () => {
    return (
      <TagGroup items={MOCK_TAGS}>
        {(item) => <TagItem tooltip={`Tag: ${item.name}`}>{item.name}</TagItem>}
      </TagGroup>
    );
  },
};

export const WithCustomTagContent: Story = {
  render: () => {
    return (
      <TagGroup items={MOCK_TAGS}>
        {(item) => (
          <TagItem>
            <Star size="tiny" style={{ transform: 'translateY(-1px)' }} /> {item.name}
          </TagItem>
        )}
      </TagGroup>
    );
  },
};

export const WithTagItemRenderedAs: Story = {
  render: () => {
    return (
      <TagGroup items={MOCK_TAGS}>
        {(item) => (
          <TagItem as="a" href="/">
            {item.name}
          </TagItem>
        )}
      </TagGroup>
    );
  },
};
