import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonGroup, IconButton, Menu, MenuItem, MenuTrigger, Popover } from '../src';

const meta: Meta<typeof ButtonGroup> = {
	component: ButtonGroup,
	title: 'Components/Buttons/ButtonGroup',
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const defaultArgs = {
	children: (
		<>
			<Button>First</Button>
			<Button variant="primary">Second</Button>
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

export const SplitButton: Story = {
	args: {
		children: (
			<>
				<Button>Split button</Button>
				<MenuTrigger>
					<IconButton icon="chevron-down" aria-label="open" />
					<Popover placement="bottom end">
						<Menu>
							<MenuItem>Item one</MenuItem>
							<MenuItem>Item two</MenuItem>
						</Menu>
					</Popover>
				</MenuTrigger>
			</>
		),
		spacing: 'compact',
	},
};
