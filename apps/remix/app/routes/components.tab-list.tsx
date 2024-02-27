import { TabList } from '@launchpad-ui/core';
import { Item } from '@react-stately/collections';

export default function Index() {
	return (
		<TabList>
			<Item key="1" title="Active tab">
				<p style={{ padding: '0.625rem' }}>Active tab</p>
			</Item>
			<Item key="2" title="Another tab">
				<p style={{ padding: '0.625rem' }}>Another tab</p>
			</Item>
		</TabList>
	);
}
