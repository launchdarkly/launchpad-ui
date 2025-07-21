import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../src/Heading';

const meta: Meta<typeof Heading> = {
	title: 'Components/Content/Heading',
	component: Heading,
	argTypes: {
		children: {
			control: { type: 'text' },
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		variant: {
			control: { type: 'select' },
			options: [
				'display1',
				'heading1Medium',
				'heading1Semibold',
				'heading1ExtraBold',
				'heading2Medium',
				'heading2Semibold',
				'heading2ExtraBold',
				'heading3Regular',
				'heading3Semibold',
				'heading3ExtraBold',
			],
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right'],
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
			control: { type: 'object' },
			description: 'Optional reference to the heading DOM element',
			table: {
				type: { summary: 'Ref<HTMLHeadingElement>' },
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

export const Display1: Story = {
	args: {
		variant: 'display1',
		children: 'Display 1',
	},
};

export const Heading1: Story = {
	render: () => (
		<>
			<Heading variant="heading1Medium">Heading 1 Medium</Heading>
			<Heading variant="heading1Semibold">Heading 1 Semibold</Heading>
			<Heading variant="heading1ExtraBold">Heading 1 ExtraBold</Heading>
		</>
	),
};

export const Heading2: Story = {
	render: () => (
		<>
			<Heading variant="heading2Medium">Heading 2 Medium</Heading>
			<Heading variant="heading2Semibold">Heading 2 Semibold</Heading>
			<Heading variant="heading2ExtraBold">Heading 2 ExtraBold</Heading>
		</>
	),
};

export const Heading3: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Heading variant="heading3Regular">Heading 3 Regular</Heading>
			<Heading variant="heading3Semibold">Heading 3 Semibold</Heading>
			<Heading variant="heading3ExtraBold">Heading 3 ExtraBold</Heading>
		</div>
	),
};

export const Alignment: Story = {
	render: () => (
		<>
			<Heading align="left">Left aligned heading</Heading>
			<Heading align="center">Center aligned heading</Heading>
			<Heading align="right">Right aligned heading</Heading>
		</>
	),
};

/**
 * Enable truncation (ellipsis) by setting the `maxLines` prop.
 */
export const Truncation: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
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
