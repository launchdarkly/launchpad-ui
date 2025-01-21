import type { StoryObj } from '@storybook/react';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../src';

export default {
	component: Table,
	subcomponents: { TableBody, TableCell, TableHead, TableHeadCell, TableRow },
	title: 'Legacy/Table',
	description: 'An element used to organize and display data to users.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__TABLE,
		},
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Table>;

enum TableHeaders {
	TYPE = 'type',
	TOTAL = 'total',
}

export const Example: Story = {
	args: {
		compact: false,
		auto: false,
		children: [
			<TableHead key="head">
				<TableRow>
					<TableHeadCell id={TableHeaders.TYPE} scope="col">
						Type
					</TableHeadCell>
					<TableHeadCell id={TableHeaders.TOTAL} scope="col">
						Total
					</TableHeadCell>
				</TableRow>
			</TableHead>,
			<TableBody key="body">
				{[
					{ key: 'test1', total: 203, name: 'feature' },
					{ key: 'test2', name: 'click', total: 22 },
				].map((item) => (
					<TableRow key={item.key}>
						<TableCell headers={TableHeaders.TYPE}>{item.name}</TableCell>
						<TableCell headers={TableHeaders.TOTAL}>{item.total}</TableCell>
					</TableRow>
				))}
			</TableBody>,
		],
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id': { enabled: false },
				},
			},
		},
	},
};
