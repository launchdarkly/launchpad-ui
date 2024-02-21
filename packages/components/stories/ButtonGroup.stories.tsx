import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonGroup } from '../src';

const meta: Meta<typeof ButtonGroup> = {
	component: ButtonGroup,
	title: 'React Aria Components/ButtonGroup',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const defaultArgs = {
	children: (
		<>
			<Button>First</Button>
			<Button variant='primary'>Second</Button>
			<Button>Third</Button>
		</>
	),
};

export const Basic: Story = {
	args: { ...defaultArgs },
};

export const Compact: Story = {
	args: { ...defaultArgs, spacing: 'compact' },
};

export const Large: Story = {
	args: { ...defaultArgs, spacing: 'large' },
};
