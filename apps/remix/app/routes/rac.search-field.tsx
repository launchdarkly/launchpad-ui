import { SearchField, Input, Label, Group, IconButton } from '@launchpad-ui/components';

export default function Index() {
  return (
    <SearchField>
      <Label>Label</Label>
      <Group>
        <Input />
        <IconButton
          icon="cancel-circle-outline"
          aria-label="clear"
          size="small"
          variant="minimal"
        />
      </Group>
    </SearchField>
  );
}
