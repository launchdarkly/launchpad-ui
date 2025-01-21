import type { StoryObj } from '@storybook/react';

import { FormGroup, FormHint, Label, RequiredAsterisk, TextField } from '../src';

export default {
	component: FormGroup,
	title: 'Legacy/Form/FormGroup',
	description: 'A group of form fields.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		className: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
		isInvalid: {
			table: {
				category: 'Content',
			},
		},
		ignoreValidation: {
			table: {
				category: 'Content',
			},
		},
		name: {
			table: {
				category: 'DOM Attributes',
			},
		},
	},
};

type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
	args: {
		name: 'key',
		children: (
			<>
				<Label htmlFor="key">
					Key <RequiredAsterisk />
				</Label>
				<TextField id="key" name="key" />
				<FormHint>Use this key in your code.</FormHint>
			</>
		),
	},
	render: () => {
		return (
			<>
				<p>
					A FormGroup is a wrapper to a form section that provides vertical spacing via top and
					bottom margin.
				</p>
				<p>Below are two fields each wrapped in a FormGroup.</p>
				<FormGroup>
					<Label htmlFor="key">
						Key <RequiredAsterisk />
					</Label>
					<TextField id="key" name="key" />
					<FormHint>Use this key in your code.</FormHint>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="key">
						Key <RequiredAsterisk />
					</Label>
					<TextField id="key" name="key" />
					<FormHint>Use this key in your code.</FormHint>
				</FormGroup>
			</>
		);
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
