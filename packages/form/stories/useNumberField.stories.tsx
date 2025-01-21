import type { StoryObj } from '@storybook/react';
import type { FormFieldProps } from '../src/FormField';

import { FormField } from '../src/FormField';
import { useNumberField } from '../src/useNumberField';

const Demo = (props: Partial<FormFieldProps> = {}) => {
	const id = 'number-field';
	const { labelProps, formHintProps, fieldErrorProps, renderNumberField } = useNumberField({
		id,
	});

	return (
		<FormField
			isRequired={false}
			name={id}
			htmlFor={id}
			LabelProps={labelProps}
			FormHintProps={formHintProps}
			FieldErrorProps={fieldErrorProps}
			label={id}
			{...props}
		>
			{renderNumberField()}
		</FormField>
	);
};

export default {
	component: Demo,
	title: 'Legacy/Form/useNumberField',
	description: 'A text field allows the user to provide numeric values.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
		},
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		value: {
			table: {
				category: 'DOM Attributes',
			},
		},
		onChange: {
			table: {
				category: 'Functions',
				subCategory: 'Synthetic Events',
			},
		},
	},
};

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
	args: {
		label: 'Number field',
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

export const Required: Story = {
	args: {
		label: 'Number field',
		isRequired: true,
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
		hint: 'Enter a number between 1 and 10.',
		label: 'Number field',
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
		errorMessage: 'that number is incorrect',
		isInvalid: true,
		label: 'Number field',
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id': { enabled: false },
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};
