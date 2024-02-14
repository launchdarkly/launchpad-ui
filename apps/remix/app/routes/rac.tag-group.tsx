import { TagGroup, TagList, Tag, Label } from '@launchpad-ui/components';

export default function Index() {
  return (
    <TagGroup>
      <Label>Label</Label>
      <TagList>
        <Tag>One</Tag>
        <Tag>Two</Tag>
        <Tag>Three</Tag>
      </TagList>
    </TagGroup>
  );
}
