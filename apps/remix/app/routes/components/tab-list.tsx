import { TabList } from '@launchpad-ui/tab-list';
import { Item } from '@react-stately/collections';

export default function Index() {
  return (
    <TabList>
      <Item key="1" title="Active tab">
        <p style={{ padding: '1rem' }}>Active tab</p>
      </Item>
      <Item key="2" title="Another tab">
        <p style={{ padding: '1rem' }}>Another tab</p>
      </Item>
    </TabList>
  );
}
