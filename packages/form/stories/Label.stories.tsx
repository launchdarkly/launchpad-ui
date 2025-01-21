import type { StoryObj } from '@storybook/react';

import { Label } from '../src';

export default {
	component: Label,
	title: 'Legacy/Form/Label',
	description: 'A label describes a form field.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		className: {
			table: {
				category: 'Presentation',
			},
		},
		disabled: {
			table: {
				category: 'Presentation',
			},
		},
		optional: {
			table: {
				category: 'Presentation',
			},
		},
		style: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
		required: {
			table: {
				category: 'DOM Attributes',
			},
		},
		htmlFor: {
			table: {
				category: 'DOM Attributes',
			},
		},
	},
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		htmlFor: 'name',
		children: 'Name',
	},
};

export const WithOptional: Story = {
	args: {
		htmlFor: 'name',
		children: 'Name',
		optional: true,
	},
};

export const WithRequired: Story = {
	args: {
		htmlFor: 'name',
		children: 'Name',
		required: true,
	},
};
