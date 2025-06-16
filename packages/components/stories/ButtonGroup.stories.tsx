import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { IconButton } from '../src/IconButton';
import { LinkButton } from '../src/LinkButton';
import { Menu, MenuItem, MenuTrigger } from '../src/Menu';
import { Popover } from '../src/Popover';

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

export const SplitLinkButton: Story = {
	args: {
		children: (
			<>
				<LinkButton href="/hello">Split link button</LinkButton>
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
