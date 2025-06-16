import type { StoryObj } from '@storybook/react-vite';

import { Label, Radio, RadioGroup } from '../src';

export default {
	component: RadioGroup,
	title: 'Legacy/Form/RadioGroup',
	description: 'A radio button group allows the user to select one of a set of options.',
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
		children: {
			table: {
				category: 'Content',
			},
		},
		id: {
			table: {
				category: 'DOM Attributes',
			},
		},
		name: {
			table: {
				category: 'DOM Attributes',
			},
		},
		value: {
			table: {
				category: 'DOM Attributes',
			},
		},
	},
};

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	args: {
		name: 'kind',
		value: 'kindA',
		children: (
			<>
				<Radio id="A" value="kindA" checked />
				<Label htmlFor="A">A</Label>
				<Radio id="B" value="kindB" />
				<Label htmlFor="B">B</Label>
			</>
		),
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};
