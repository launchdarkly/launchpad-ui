import type { StoryObj } from '@storybook/react';

import { Pagination } from '../src';

export default {
	component: Pagination,
	title: 'Legacy/Pagination',
	description: 'Navigate through a paged list.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Pagination>;

export const Example: Story = {
	args: {
		resourceName: 'flags',
		onChange: () => undefined,
		currentOffset: 0,
		pageSize: 2,
		isReady: true,
		totalCount: 4,
	},
};
