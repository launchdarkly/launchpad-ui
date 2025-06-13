import type { StoryObj } from '@storybook/react-vite';

import { Checkbox } from '../src';

export default {
	component: Checkbox,
	title: 'Legacy/Form/Checkbox',
	description: 'A checkbox allows the user to toggle between checked and unchecked states.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		checked: {
			table: {
				category: 'Presentation',
			},
		},
		disabled: {
			table: {
				category: 'Presentation',
			},
		},
		labelClassName: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
		ref: {
			table: {
				category: 'DOM Attributes',
			},
		},
		onChange: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
	},
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		onChange: () => undefined,
		checked: false,
		disabled: false,
		children: 'This is the label',
	},
};
