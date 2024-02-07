import { TextField, Input, Label, Group, IconButton } from '@launchpad-ui/components';

export default function Index() {
  return (
    <TextField>
      <Label>Label</Label>
      <Group>
        <Input />
        <IconButton icon="add" aria-label="add" size="small" />
      </Group>
    </TextField>
  );
}
