import type { MockTag } from './constants';
import type { TagGroupProps } from '../src';

import { useState } from 'react';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { TagGroup, TagItem } from '../src';

import { MOCK_TAGS } from './constants';

const TagGroupComponent = ({
  onRemove,
  ...props
}: Omit<TagGroupProps<MockTag>, 'items' | 'children'>) => {
  const [items, setItems] = useState(MOCK_TAGS);

  return (
    <TagGroup
      items={items}
      onRemove={(key) => {
        if (onRemove) onRemove(key);
        setItems((prevItems) => prevItems.filter((item) => key !== item.id));
      }}
      {...props}
    >
      {(item) => <TagItem>{item.name}</TagItem>}
    </TagGroup>
  );
};

describe('Tag', () => {
  it('renders list', () => {
    render(<TagGroupComponent />);
    expect(screen.getByTestId('tag-list')).toBeInTheDocument();
  });

  it('renders correct number of tags', () => {
    render(<TagGroupComponent />);
    expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length);
  });

  it('does not allow removal by default', () => {
    render(<TagGroupComponent />);
    expect(screen.queryByTestId('remove-tag-btn')).not.toBeInTheDocument();
  });

  it('removes items when tag remove button is pressed', async () => {
    const user = userEvent.setup();

    render(<TagGroupComponent allowsRemoving />);

    expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length);

    await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

    expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length - 1);
  });

  it('triggers onRemove when prop is passed', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(<TagGroupComponent allowsRemoving onRemove={spy} />);

    await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

    expect(spy).toHaveBeenCalledWith(MOCK_TAGS[0].id);
  });

  it('removes items when tag remove button is pressed', async () => {
    const user = userEvent.setup();

    render(<TagGroupComponent allowsRemoving />);

    expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length);

    await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

    expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length - 1);
  });

  it('calls onAction when action is pressed', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(
      <TagGroupComponent
        action={() => (
          <button onClick={spy} data-test-id="action-btn">
            Click me
          </button>
        )}
      />
    );

    await user.click(screen.getByTestId('action-btn'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
