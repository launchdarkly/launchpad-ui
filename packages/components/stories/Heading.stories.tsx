import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from '../src/Heading';

const meta: Meta<typeof Heading> = {
	title: 'Components/Content/Heading',
	component: Heading,
	parameters: {
		docs: {
			description: {
				component: `
A component for headings with flexible size and bold options.

For body text, use [Text](/docs/components-content-text--docs). For labels, use [Label](/docs/components-content-label--docs). For code, use [Code](/docs/components-content-code--docs).
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
		level: {
			control: { type: 'number' },
		},
		className: {
			control: { type: 'text' },
		},
		ref: {
			table: {
				disable: true,
			},
		},
	},
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	args: {
		children: 'The quick brown fox jumps over the lazy dog',
	},
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Heading size="large">Large heading</Heading>
			<Heading size="medium">Medium heading</Heading>
			<Heading size="small">Small heading</Heading>
		</div>
	),
};

export const Bold: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Heading size="large" bold={false}>
				Large regular
			</Heading>
			<Heading size="large" bold={true}>
				Large bold
			</Heading>
			<Heading size="medium" bold={false}>
				Medium regular
			</Heading>
			<Heading size="medium" bold={true}>
				Medium bold
			</Heading>
			<Heading size="small" bold={false}>
				Small regular
			</Heading>
			<Heading size="small" bold={true}>
				Small bold
			</Heading>
		</div>
	),
};

/**
 * Enable truncation (ellipsis) by setting the `maxLines` prop.
 */
export const Truncation: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
			<Heading maxLines={1}>
				This is a very long heading that should be truncated after one line when the maxLines prop
				is set to 1.
			</Heading>
			<Heading maxLines={2}>
				This is a longer heading that should be truncated after two lines when the maxLines prop is
				set to 2. It continues for several lines to demonstrate the truncation behavior.
			</Heading>
		</div>
	),
};
