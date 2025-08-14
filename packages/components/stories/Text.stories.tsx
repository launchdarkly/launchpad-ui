import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from '../src/Text';

const meta: Meta<typeof Text> = {
	title: 'Components/Content/Text',
	component: Text,
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-26765&m=dev',
		},
		docs: {
			description: {
				component: `
A component for body text with flexible size and bold options.

For headings, use [Heading](/docs/components-content-heading--docs). For labels, use [Label](/docs/components-content-label--docs). For code, use [Code](/docs/components-content-code--docs).
				`,
			},
		},
	},
	argTypes: {
		children: {
			control: { type: 'text' },
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		bold: {
			control: { type: 'boolean' },
		},
		maxLines: {
			control: { type: 'number' },
		},
		elementType: {
			table: {
				disable: true,
			},
		},
		className: {
			control: { type: 'text' },
		},
		ref: {
			control: { type: 'object' },
			description: 'Optional reference to the text DOM element',
			table: {
				type: { summary: 'Ref<HTMLElement>' },
				disable: true,
			},
		},
	},
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'The quick brown fox jumps over the lazy dog',
	},
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Text size="small">Small text</Text>
			<Text size="medium">Medium text</Text>
			<Text size="large">Large text</Text>
		</div>
	),
};

export const Bold: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Text size="large" bold={false}>
				Large regular
			</Text>
			<Text size="large" bold={true}>
				Large bold
			</Text>
			<Text size="medium" bold={false}>
				Medium regular
			</Text>
			<Text size="medium" bold={true}>
				Medium bold
			</Text>
			<Text size="small" bold={false}>
				Small regular
			</Text>
			<Text size="small" bold={true}>
				Small bold
			</Text>
		</div>
	),
};

/**
 * Enable truncation (ellipsis) by setting the `maxLines` prop.
 */
export const Truncation: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
			<Text maxLines={1}>
				This is a very long text that should be truncated after one line when the maxLines prop is
				set to 1.
			</Text>
			<Text maxLines={2}>
				This is a longer text that should be truncated after two lines when the maxLines prop is set
				to 2. It continues for several lines to demonstrate the truncation behavior.
			</Text>
			<Text maxLines={3}>
				This is an even longer text that should be truncated after three lines when the maxLines
				prop is set to 3. It continues for many more lines to demonstrate how the truncation works
				with the ellipsis at the end.
			</Text>
		</div>
	),
};
