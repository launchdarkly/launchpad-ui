import figma from '@figma/code-connect';

import { Tab, TabList, TabPanel, Tabs } from '../src/Tabs';

figma.connect(
	Tab,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A45112',
	{
		props: {
			// In Figma Tab is marked as hidden (.), needs to be fixed there before can be used here.
			// For now sample is used instead of actual tabs.
			// tabs: figma.children('.Tab'),
		},
		example: () => (
			<Tabs selectedKey="1" onSelectionChange={(key) => console.log(key)}>
				<TabList aria-label="tabs">
					<Tab id="0">Tab 1</Tab>
					<Tab id="1">Tab 2</Tab>
					<Tab id="2">Tab 3</Tab>
				</TabList>
				<TabPanel id="1">Tab content 1</TabPanel>
				<TabPanel id="2">Tab content 2</TabPanel>
				<TabPanel id="3">Tab content 3</TabPanel>
			</Tabs>
		),
	},
);
