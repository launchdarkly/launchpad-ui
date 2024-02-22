import {
  ComboBox,
  Label,
  Input,
  IconButton,
  Group,
  ListBox,
  ListBoxItem,
  Popover,
} from '@launchpad-ui/components';

export default function Index() {
  return (
    <ComboBox>
      <Label>Label</Label>
      <Group>
        <Input />
        <IconButton
          icon="chevron-down"
          size="small"
          variant="minimal"
          aria-label="Show suggestions"
        />
      </Group>
      <Popover>
        <ListBox>
          <ListBoxItem>Item one</ListBoxItem>
          <ListBoxItem>Item two</ListBoxItem>
          <ListBoxItem>Item three</ListBoxItem>
        </ListBox>
      </Popover>
    </ComboBox>
  );
}
