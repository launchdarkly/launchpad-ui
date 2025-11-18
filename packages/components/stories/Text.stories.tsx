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
		showTooltipOnOverflow: {
			control: { type: 'boolean' },
			description: 'Show tooltip when text overflows',
		},
		tooltipContent: {
			control: { type: 'text' },
			description: 'Custom tooltip content (defaults to text children)',
		},
		tooltipPlacement: {
			control: { type: 'select' },
			options: ['top', 'bottom', 'left', 'right', 'start', 'end'],
			description: 'Tooltip placement',
		},
		tooltipClassName: {
			control: { type: 'text' },
			description: 'Additional CSS class for tooltip',
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

/**
 * Show a tooltip when text overflows by enabling the `showTooltipOnOverflow` prop.
 * The tooltip only appears when the text is actually truncated.
 */
export const OverflowTooltip: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '250px' }}>
			<div>
				<p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#666' }}>
					Single line with overflow tooltip:
				</p>
				<Text maxLines={1} showTooltipOnOverflow>
					This is a very long text that will be truncated and show a tooltip on hover or focus
				</Text>
			</div>

			<div>
				<p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#666' }}>
					Multi-line (2 lines) with overflow tooltip:
				</p>
				<Text maxLines={2} showTooltipOnOverflow>
					This is a longer text that will be truncated after two lines and show a tooltip when you
					hover over it. The tooltip contains the full text content.
				</Text>
			</div>

			<div>
				<p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#666' }}>
					No overflow (tooltip won't show):
				</p>
				<Text maxLines={2} showTooltipOnOverflow>
					Short text
				</Text>
			</div>
		</div>
	),
};

/**
 * Customize the tooltip content and placement.
 */
export const CustomTooltip: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '250px' }}>
			<div>
				<p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#666' }}>
					Custom tooltip content:
				</p>
				<Text
					maxLines={1}
					showTooltipOnOverflow
					tooltipContent="This is custom tooltip text that's different from the truncated content"
				>
					This is the truncated text that appears in the component
				</Text>
			</div>

			<div>
				<p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#666' }}>Bottom placement:</p>
				<Text maxLines={1} showTooltipOnOverflow tooltipPlacement="bottom">
					Hover to see tooltip below this text. This text is long enough to be truncated.
				</Text>
			</div>

			<div>
				<p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#666' }}>
					Different sizes with tooltips:
				</p>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
					<Text size="small" maxLines={1} showTooltipOnOverflow>
						Small text with overflow tooltip - this text will be truncated
					</Text>
					<Text size="medium" maxLines={1} showTooltipOnOverflow>
						Medium text with overflow tooltip - this text will be truncated
					</Text>
					<Text size="large" maxLines={1} showTooltipOnOverflow>
						Large text with overflow tooltip - this text will be truncated
					</Text>
				</div>
			</div>
		</div>
	),
};
