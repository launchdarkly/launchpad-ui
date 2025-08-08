import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../src/Label';

const meta: Meta<typeof Label> = {
	title: 'Components/Content/Label',
	component: Label,
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-26765&m=dev',
		},
		docs: {
			description: {
				component: `
A component for labels.

For body text, use [Text](/docs/components-content-text--docs). For headings, use [Heading](/docs/components-content-heading--docs). For code, use [Code](/docs/components-content-code--docs).
				`,
			},
		},
	},
	argTypes: {
		ref: {
			control: false,
			description: 'Optional reference to the label DOM element',
			table: {
				type: { summary: 'Ref<HTMLLabelElement>' },
			},
		},
		children: {
			control: { type: 'text' },
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		maxLines: {
			control: { type: 'number' },
		},
		className: {
			control: { type: 'text' },
		},
		elementType: {
			table: {
				disable: true,
			},
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

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Label size="small">Small label</Label>
			<Label size="medium">Medium label</Label>
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
