import type { StoryObj } from '@storybook/react';

import { FormField, TextField } from '../src';

export default {
	component: FormField,
	title: 'Legacy/Form/FormField',
	description:
		'A FormField is an opinionated way to organize form field components like labels, errors, hints, and the field itself."',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
		},
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
		onChange: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
	},
};

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
	args: {
		isRequired: true,
		label: 'Email',
		name: 'Email',
		htmlFor: 'Email',
		children: <TextField id="Email" value="testing@launchdarkly.com" />,
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

export const WithError: Story = {
	args: {
		isRequired: true,
		label: 'Email',
		name: 'Email',
		htmlFor: 'Email',
		errorMessage: 'Oops, you entered an incorrect email',
		isInvalid: true,
		children: <TextField id="Email" value="testing@launchdarkly.com" />,
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

export const WithHint: Story = {
	args: {
		isRequired: true,
		label: 'Email',
		name: 'Email',
		htmlFor: 'Email',
		hint: 'Must be a valid email',
		children: <TextField id="Email" autoComplete="email" value="testing@launchdarkly.com" />,
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

export const WithPasswordManagerDisabled: Story = {
	args: {
		isRequired: true,
		label: 'Name',
		name: 'Name',
		htmlFor: 'Name',
		hint: 'Must not be blank',
		children: <TextField id="Name" autoComplete="off" value="First Name" />,
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
