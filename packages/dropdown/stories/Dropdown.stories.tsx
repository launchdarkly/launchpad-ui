import type { Meta, StoryObj } from '@storybook/react-vite';

import { Menu, MenuItem } from '@launchpad-ui/menu';

import { Dropdown, DropdownButton } from '../src';

export default {
	component: Dropdown,
	subcomponents: { DropdownButton },
	title: 'Legacy/Dropdown',
	description: 'Dropdowns display a list of actions or options to a user.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
					display: 'grid',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Example: Story = {
	args: {
		onInteraction: undefined,
		onStateChange: () => undefined,
		onSelect: () => undefined,
		children: [
			<DropdownButton size="small" kind="primary" key="1">
				Click this button
			</DropdownButton>,
			<Menu key="2">
				<MenuItem>Item 1</MenuItem>
				<MenuItem>Item 2</MenuItem>
				<MenuItem>Item 3</MenuItem>
			</Menu>,
		],
		isOpen: true,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithHtmlButton: Story = {
	args: {
		onInteraction: undefined,
		onStateChange: () => undefined,
		onSelect: () => undefined,
		children: [
			<button key="1" type="button">
				native html button
			</button>,
			<Menu key="2">
				<MenuItem>Item 1</MenuItem>
			</Menu>,
		],
	},
};

export const NoArrow: Story = {
	args: {
		onInteraction: undefined,
		onStateChange: () => undefined,
		onSelect: () => undefined,
		children: [
			<DropdownButton hideCaret kind="primary" key="1">
				DropdownButton
			</DropdownButton>,
			<Menu key="2">
				<MenuItem>Item 1</MenuItem>
			</Menu>,
		],
	},
};
