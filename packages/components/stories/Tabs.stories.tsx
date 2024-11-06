import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabList, TabPanel, Tabs } from '../src';

import { userEvent, within } from '@storybook/test';
import { Route, Routes, useLocation } from 'react-router-dom';

const meta: Meta<typeof Tabs> = {
	component: Tabs,
	// @ts-ignore
	subcomponents: { Tab, TabList, TabPanel },
	title: 'Components/Navigation/Tabs',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
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
