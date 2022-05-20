import { Item } from '@react-stately/collections';

import { Button, ButtonKind } from '@launchpad-ui/button';
import { TabList } from '../src';

export default {
  component: TabList,
  title: 'Components/TabList',
  description: 'TabList navigates between related sections of content on the same page.',
};

export const TabListExample = {
  render: () => (
    <TabList>
      <Item key="1" title="Active tab">
        <p style={{ padding: '1rem' }}>Active tab</p>
      </Item>
      <Item key="2" title="Another tab">
        <p style={{ padding: '1rem' }}>Another tab</p>
      </Item>
    </TabList>
  ),
};

export const TabListActiveTabExample = {
  render: () => (
    <TabList activeTab="2">
      <Item key="1" title="Active tab">
        <p style={{ padding: '1rem' }}>Active tab</p>
      </Item>
      <Item key="2" title="Another tab">
        <p style={{ padding: '1rem' }}>Another tab</p>
      </Item>
    </TabList>
  ),
};

export const TabListDisabledTabsExample = {
  render: () => (
    <TabList disabledTabs={['3', '4']}>
      <Item key="1" title="Active tab">
        <p style={{ padding: '1rem' }}>Active tab</p>
      </Item>
      <Item key="2" title="Another tab">
        <p style={{ padding: '1rem' }}>Another tab</p>
      </Item>
      <Item key="3" title="One more tab">
        <p style={{ padding: '1rem' }}>Active tab</p>
      </Item>
      <Item key="4" title="Yet another tab">
        <p style={{ padding: '1rem' }}>Another tab</p>
      </Item>
    </TabList>
  ),
};

export const TabListFocusableContent = {
  render: () => (
    <TabList>
      <Item key="3" title="Active tab">
        <div>
          <p style={{ padding: '1rem 0' }}>Active tab</p>
          <Button kind={ButtonKind.PRIMARY}>Click me</Button>
        </div>
      </Item>
      <Item key="4" title="Another tab">
        <div>
          <p style={{ padding: '1rem 0' }}>Another tab</p>
          <Button kind={ButtonKind.PRIMARY}>Click me</Button>
        </div>
      </Item>
    </TabList>
  ),
};
