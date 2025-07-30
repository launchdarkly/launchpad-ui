import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from '../src/Text';

const meta: Meta<typeof Text> = {
	title: 'Components/Content/Text',
	component: Text,
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
				'body1Regular',
				'body1Semibold',
				'body1ExtraBold',
				'body2Regular',
				'body2Semibold',
				'body2ExtraBold',
				'small1Regular',
				'small1Medium',
				'small1Semibold',
			],
		},
		maxLines: {
			control: { type: 'number' },
		},
		elementType: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
		ref: {
			control: { type: 'object' },
			description: 'Optional reference to the text DOM element',
			table: {
				type: { summary: 'Ref<HTMLElement>' },
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

export const Body1: Story = {
	render: () => (
		<>
			<Text variant="body1Regular">Body 1 Regular</Text>
			<Text variant="body1Semibold">Body 1 Semibold</Text>
			<Text variant="body1ExtraBold">Body 1 ExtraBold</Text>
		</>
	),
};

export const Body2: Story = {
	render: () => (
		<>
			<Text variant="body2Regular">Body 2 Regular</Text>
			<Text variant="body2Semibold">Body 2 Semibold</Text>
			<Text variant="body2ExtraBold">Body 2 ExtraBold</Text>
		</>
	),
};

export const Small1: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Text variant="small1Regular">Small 1 Regular</Text>
			<Text variant="small1Medium">Small 1 Medium</Text>
			<Text variant="small1Semibold">Small 1 Semibold</Text>
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
