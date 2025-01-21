import type { StoryObj } from '@storybook/react';

import { AppliedFilter } from '../src';

export default {
	component: AppliedFilter,
	title: 'Legacy/Filter/AppliedFilter',
	description: 'We use filters to filter our lists based on search critera.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FILTER,
		},
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		testId: {
			control: 'text',
			table: {
				category: 'Testing',
				subcategory: 'Filter Button',
			},
		},
		className: {
			table: {
				category: 'Presentation',
				subcategory: 'Filter Dropdown',
			},
		},
		isClearable: {
			table: {
				category: 'Presentation',
				subcategory: 'Filter Button',
			},
		},
		isEmpty: {
			table: {
				category: 'Presentation',
			},
		},
		isLoading: {
			table: {
				category: 'Presentation',
			},
		},
		description: {
			table: {
				category: 'Content',
				subcategory: 'Filter Button',
			},
		},
		disabledOptionTooltip: {
			table: {
				category: 'Content',
				subcategory: 'Filter Menu',
			},
		},
		name: {
			table: {
				category: 'Content',
				subcategory: 'Filter Button',
			},
		},
		hideName: {
			table: {
				category: 'Presentation',
				subcategory: 'Filter Button',
			},
		},
		options: {
			table: {
				category: 'Content',
				subcategory: 'Filter Menu',
			},
		},
		searchPlaceholder: {
			table: {
				category: 'Content',
				subcategory: 'Filter Menu',
			},
		},
		searchAriaLabel: {
			table: {
				category: 'Content',
				subcategory: 'Filter Menu',
			},
		},
		searchValue: {
			table: {
				category: 'Content',
				subcategory: 'Filter Menu',
			},
		},
		onClear: {
			table: {
				category: 'Functions',
				subcategory: 'Filter Button',
			},
		},
		onClickFilterButton: {
			table: {
				category: 'Functions',
				subcategory: 'Filter Button',
			},
		},
		onSearchChange: {
			table: {
				category: 'Functions',
			},
		},
		onSelect: {
			table: {
				category: 'Functions',
			},
		},
		onStateChange: {
			table: {
				category: 'Functions',
			},
		},
	},
};

type Story = StoryObj<typeof AppliedFilter>;

export const Basic: Story = {
	args: {
		searchValue: '',
		searchPlaceholder: 'filter here',
		onSearchChange: () => undefined,
		name: 'Author',
		description: 'Osmo',
		options: [
			{ name: 'Mickey Mouse', value: 'mickey' },
			{ name: 'Osmo', value: 'osmo' },
		],
	},
};
