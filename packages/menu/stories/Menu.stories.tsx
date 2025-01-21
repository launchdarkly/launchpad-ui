import type { StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { userEvent } from '@storybook/test';

import { Menu, MenuDivider, MenuItem, MenuSearch } from '../src';

import './Menu.stories.css';

export default {
	component: Menu,
	subcomponents: { MenuDivider, MenuItem, MenuSearch },
	title: 'Legacy/Menu',
	description: 'Menus present a list of items a user can choose from.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__MENU,
		},
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
	args: {
		children: [
			<MenuItem key="1">Item 1</MenuItem>,
			<MenuItem key="2">Item 2</MenuItem>,
			<MenuItem key="3">Item 3</MenuItem>,
			<MenuItem key="4">Item 4</MenuItem>,
			<MenuItem key="5" disabled>
				Disabled item
			</MenuItem>,
		],
	},
	play: async () => {
		await userEvent.tab();
	},
};

export const WithGroupHeader: Story = {
	args: {
		children: [
			<MenuItem key="1" groupHeader>
				Group
			</MenuItem>,
			<MenuItem key="2">Group item 1</MenuItem>,
			<MenuItem key="3">Group item 2</MenuItem>,
			<MenuItem key="4">Group item 3</MenuItem>,
			<MenuItem key="5">Group item 4</MenuItem>,
			<MenuDivider key="6" />,
			<MenuItem key="7">Stand-alone item 1</MenuItem>,
		],
	},
};

export const WithSearch: Story = {
	args: {
		children: [
			<MenuSearch key="search" />,
			<MenuItem key="1">Item 1</MenuItem>,
			<MenuItem key="2">Item 2</MenuItem>,
			<MenuItem key="3">Item 3</MenuItem>,
			<MenuItem key="4">Item 4</MenuItem>,
			<MenuItem key="5">Item 5</MenuItem>,
		],
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'aria-required-children': { enabled: false },
				},
			},
		},
	},
};

export const WithCustomMenuItemClasses: Story = {
	args: {
		menuItemClassName: 'MenuItem',
		children: [
			<MenuItem key="1">Item 1</MenuItem>,
			<MenuItem key="2">Item 2</MenuItem>,
			<MenuItem key="3">Item 3</MenuItem>,
			<MenuItem key="4">Item 4</MenuItem>,
			<MenuItem key="5">Item 5</MenuItem>,
		],
	},
};

export const WithTooltips: Story = {
	args: {
		children: [
			<MenuItem key="1" tooltip="Hello">
				item 1
			</MenuItem>,
			<MenuItem key="2">item 2</MenuItem>,
		],
	},
};

export const WithHighlightedMenuItem: Story = {
	args: {
		children: [
			<MenuItem key="1" tooltip="Hello">
				item 1
			</MenuItem>,
			<MenuItem key="2" isHighlighted>
				item 2
			</MenuItem>,
			<MenuItem key="3">item 3</MenuItem>,
			<MenuItem key="4">item 4</MenuItem>,
		],
	},
};

export const WithMenuItemIcons: Story = {
	args: {
		children: [
			<MenuItem key="1" groupHeader>
				Color mode
			</MenuItem>,
			<MenuItem key="2" icon={<Icon name="theme-light" />}>
				Light
			</MenuItem>,
			<MenuItem key="3" icon={<Icon name="theme-dark" />}>
				Dark
			</MenuItem>,
			<MenuItem key="4" icon={<Icon name="device-desktop" />}>
				Use system
			</MenuItem>,
		],
	},
};

export const WithSlottedChild: Story = {
	args: {
		children: [
			<MenuItem key="1" asChild>
				<a href="https://www.launchdarkly.com" target="_blank" rel="noreferrer">
					Item 1
				</a>
			</MenuItem>,
			<MenuItem key="2">item 2</MenuItem>,
		],
	},
};
