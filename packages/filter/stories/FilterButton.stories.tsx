import type { StoryObj } from '@storybook/react-vite';

import { FilterButton } from '../src';

export default {
	component: FilterButton,
	title: 'Legacy/Filter/FilterButton',
	description:
		"When the Filter component doesn't suffice, construct your own custom filter using the FilterButton.",
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof FilterButton>;

export const Basic: Story = {
	args: {
		name: 'Author',
		children: 'Osmo',
	},
};

export const WithNameOnly: Story = {
	args: {
		name: 'Author',
	},
};

export const WithDescriptionOnly: Story = {
	args: {
		name: 'Author',
		hideName: true,
		children: 'Osmo',
	},
};

export const WithIconOnly: Story = {
	args: {
		name: 'Author',
		hideName: true,
	},
};

export const WithClearButton: Story = {
	args: {
		name: 'Author',
		children: 'Osmo',
		isClearable: true,
	},
};

export const WithClearButtonCustomTooltip: Story = {
	args: {
		name: 'Author',
		children: 'Osmo',
		isClearable: true,
		clearTooltip: <span>custom message goes here</span>,
	},
};
