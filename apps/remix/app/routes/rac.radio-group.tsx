import { RadioGroup, Radio, Label } from '@launchpad-ui/components';

export default function Index() {
  return (
    <RadioGroup>
      <Label>Label</Label>
      <Radio value="1">Radio 1</Radio>
      <Radio value="2">Radio 2</Radio>
    </RadioGroup>
  );
}
