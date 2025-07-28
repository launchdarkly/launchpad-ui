import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../src/Label';

const meta: Meta<typeof Label> = {
	title: 'Components/Content/Label',
	component: Label,
	argTypes: {
		children: {
			control: { type: 'text' },
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		variant: {
			control: { type: 'select' },
			options: ['label1Regular', 'label1Medium', 'label2Regular', 'label2Medium'],
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right'],
		},
		maxLines: {
			control: { type: 'number' },
		},
		className: {
			control: { type: 'text' },
		},
		ref: {
			control: { type: 'object' },
			description: 'Optional reference to the label DOM element',
			table: {
				type: { summary: 'Ref<HTMLLabelElement>' },
			},
		},
		elementType: {
			control: { type: 'select' },
			options: ['label', 'span', 'p', 'div'],
		},
	},
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		children: 'Label text',
	},
};

export const Label1: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Label variant="label1Regular">Label 1 Regular</Label>
			<Label variant="label1Medium">Label 1 Medium</Label>
		</div>
	),
};

export const Label2: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Label variant="label2Regular">Label 2 Regular</Label>
			<Label variant="label2Medium">Label 2 Medium</Label>
		</div>
	),
};

/**
 * Enable truncation (ellipsis) by setting the `maxLines` prop.
 */
export const Truncation: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
			<Label maxLines={1}>
				This is a very long label that should be truncated after one line when the maxLines prop is
				set to 1.
			</Label>
			<Label maxLines={2}>
				This is a longer label that should be truncated after two lines when the maxLines prop is
				set to 2. It continues for several lines to demonstrate the truncation behavior.
			</Label>
		</div>
	),
};
