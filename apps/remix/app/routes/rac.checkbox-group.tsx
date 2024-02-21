import { Checkbox, CheckboxGroup, Label } from '@launchpad-ui/components';

export default function Index() {
  return (
    <CheckboxGroup>
      <Label>Label</Label>
      <Checkbox>Checkbox 1</Checkbox>
      <Checkbox>Checkbox 2</Checkbox>
    </CheckboxGroup>
  );
}
