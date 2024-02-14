import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { TagGroup, TagList, Tag, Label } from '../src';

describe('TagGroup', () => {
  it('renders', () => {
    render(
      <TagGroup>
        <Label>Label</Label>
        <TagList>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </TagList>
      </TagGroup>
    );
    expect(screen.getByRole('grid')).toBeVisible();
  });

  it('renders remove buttons', () => {
    render(
      <TagGroup onRemove={() => undefined}>
        <Label>Label</Label>
        <TagList>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </TagList>
      </TagGroup>
    );
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => expect(button).toBeVisible());
  });
});
