import type { Meta, StoryObj } from '@storybook/react';

import { GridList, GridListItem } from '../src';

const meta: Meta<typeof GridList> = {
	component: GridList,
	// @ts-ignore
	subcomponents: { GridListItem },
	title: 'Components/Collections/GridList',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof GridList>;

export const Example: Story = {
	args: {
		children: (
			<>
				<GridListItem>Item one</GridListItem>
				<GridListItem>Item two</GridListItem>
				<GridListItem>Item three</GridListItem>
			</>
		),
		selectionMode: 'single',
	},
};
