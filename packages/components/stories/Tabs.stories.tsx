import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { Tab, TabList, TabPanel, Tabs } from '../src/Tabs';

import { Route, Routes, useLocation } from 'react-router';
import { userEvent, within } from 'storybook/test';

const meta: Meta<typeof Tabs> = {
	component: Tabs,
	subcomponents: { Tab, TabList, TabPanel } as Record<string, ComponentType<unknown>>,
	title: 'Components/Navigation/Tabs',
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Example: Story = {
	args: {
		children: (
			<>
				<TabList aria-label="tabs">
					<Tab id="1">Tab 1</Tab>
					<Tab id="2">Tab 2</Tab>
					<Tab id="3">Tab 3</Tab>
				</TabList>
				<TabPanel id="1">Tab body 1</TabPanel>
				<TabPanel id="2">Tab body 2</TabPanel>
				<TabPanel id="3">Tab body 3</TabPanel>
			</>
		),
	},
};

export const States: Story = {
	args: {
		children: (
			<>
				<TabList aria-label="tabs">
					<Tab id="1">Focus Visible</Tab>
					<Tab id="2" isDisabled>
						Disabled
					</Tab>
					<Tab id="3">Hover</Tab>
				</TabList>
				<TabPanel id="1">Tab body 1</TabPanel>
				<TabPanel id="2">Tab body 2</TabPanel>
				<TabPanel id="3">Tab body 3</TabPanel>
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();

		const tabs = canvas.getAllByRole('tab');
		await userEvent.hover(tabs[2]);
	},
};

export const Links: Story = {
	render: (args) => {
		const { pathname } = useLocation();
		return (
			<Tabs selectedKey={pathname} {...args}>
				<TabList aria-label="tabs">
					<Tab id="/tab1" href="/tab1">
						Tab 1
					</Tab>
					<Tab id="/tab2" href="/tab2">
						Tab 2
					</Tab>
					<Tab id="/tab3" href="/tab3">
						Tab 3
					</Tab>
				</TabList>
				<TabPanel id={pathname}>
					<Routes>
						<Route path="/tab1" element={<>Tab body 1</>} />
						<Route path="/tab2" element={<>Tab body 2</>} />
						<Route path="/tab3" element={<>Tab body 3</>} />
					</Routes>
				</TabPanel>
			</Tabs>
		);
	},
	decorators: [
		(Story) => (
			<Routes>
				<Route path="/*" element={<Story />} />
			</Routes>
		),
	],
};
