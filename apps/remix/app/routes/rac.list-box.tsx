import { ListBox, ListBoxItem } from '@launchpad-ui/components';

export default function Index() {
  return (
    <ListBox aria-label="Items">
      <ListBoxItem>Item one</ListBoxItem>
      <ListBoxItem>Item two</ListBoxItem>
      <ListBoxItem>Item three</ListBoxItem>
    </ListBox>
  );
}
