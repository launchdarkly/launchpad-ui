import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { Item } from '@react-stately/collections';

import { TabList } from '../src';

export default {
	component: TabList,
	title: 'Legacy/TabList',
	description: 'TabList navigates between related sections of content on the same page.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof TabList>;

export const TabListExample: Story = {
	args: {
		children: [
			<Item key="1" title="Active tab">
				<p style={{ padding: '0.625rem' }}>Active tab</p>
			</Item>,
			<Item key="2" title="Another tab">
				<p style={{ padding: '0.625rem' }}>Another tab</p>
			</Item>,
		],
	},
};

export const TabListActiveTabExample: Story = {
	args: {
		activeTab: '2',
		children: [
			<Item key="1" title="Active tab">
				<p style={{ padding: '0.625rem' }}>Active tab</p>
			</Item>,
			<Item key="2" title="Another tab">
				<p style={{ padding: '0.625rem' }}>Another tab</p>
			</Item>,
		],
	},
};

export const TabListDisabledTabsExample: Story = {
	args: {
		disabledTabs: ['3', '4'],
		children: [
			<Item key="1" title="Active tab">
				<p style={{ padding: '0.625rem' }}>Active tab</p>
			</Item>,
			<Item key="2" title="Another tab">
				<p style={{ padding: '0.625rem' }}>Another tab</p>
			</Item>,
			<Item key="3" title="One more tab">
				<p style={{ padding: '0.625rem' }}>Active tab</p>
			</Item>,
			<Item key="4" title="Yet another tab">
				<p style={{ padding: '0.625rem' }}>Another tab</p>
			</Item>,
		],
	},
};

export const TabListFocusableContent: Story = {
	args: {
		children: [
			<Item key="3" title="Active tab">
				<div>
					<p style={{ padding: '0.625rem 0' }}>Active tab</p>
					<Button kind="primary">Click me</Button>
				</div>
			</Item>,
			<Item key="4" title="Another tab">
				<div>
					<p style={{ padding: '0.625rem 0' }}>Another tab</p>
					<Button kind="primary">Click me</Button>
				</div>
			</Item>,
		],
	},
};
