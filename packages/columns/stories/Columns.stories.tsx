import type { StoryObj } from '@storybook/react';

import { Block } from '../../../.storybook/Block';
import { Column, Columns } from '../src';

export default {
	component: Columns,
	title: 'Legacy/Columns',
	description: 'Elements used to lay out content horizontally with consistent spacing.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COLUMNS,
		},
	},
};

type Story = StoryObj<typeof Columns>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Column size="1/3">
					<Block text="Example" />
				</Column>
				<Column size="1/3">
					<Block text="Example" />
				</Column>
				<Column size="1/3">
					<Block text="Example" />
				</Column>
			</>
		),
	},
};

export const Content: Story = {
	args: {
		gap: '5',
		children: [
			<Column key={1}>
				<Block text="fluid" />
			</Column>,
			<Column size="content" key={2}>
				<Block text="128px" width="128" />
			</Column>,
		],
	},
};

export const Halves: Story = {
	args: {
		gap: '5',
		children: [
			<Column size="1/2" key={1}>
				<Block text="half" />
			</Column>,
			<Column size="1/2" key={2}>
				<Block text="half" />
			</Column>,
		],
	},
};

export const Thirds: Story = {
	args: {
		gap: '5',
		children: [
			<Column size="1/3" key={1}>
				<Block text="third" />
			</Column>,
			<Column size="1/3" key={2}>
				<Block text="third" />
			</Column>,
			<Column size="1/3" key={3}>
				<Block text="third" />
			</Column>,
		],
	},
};

export const TwoThird: Story = {
	args: {
		gap: '5',
		children: [
			<Column size="2/3" key={1}>
				<Block text="two thirds" />
			</Column>,
			<Column size="1/3" key={2}>
				<Block text="third" />
			</Column>,
		],
	},
};

export const Nested: Story = {
	args: {
		gap: '5',
		children: [
			<Column key={1}>
				<Columns gap="5">
					<Column size="1/2">
						<Block text="1.1" />
					</Column>
					<Column size="1/2">
						<Block text="1.2" />
					</Column>
				</Columns>
			</Column>,
			<Column key={2}>
				<Columns gap="5">
					<Column size="1/3">
						<Block text="2.1" />
					</Column>
					<Column size="1/3">
						<Block text="2.2" />
					</Column>
					<Column size="1/3">
						<Block text="2.3" />
					</Column>
				</Columns>
			</Column>,
		],
	},
};
