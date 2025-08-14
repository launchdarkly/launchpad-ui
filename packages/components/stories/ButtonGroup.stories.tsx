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
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=14332-4328&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const defaultArgs = {
	children: [
		<Button key="first">First</Button>,
		<Button key="second" variant="primary">
			Second
		</Button>,
		<Button key="third">Third</Button>,
	],
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
		children: [
			<Button key="button">Split button</Button>,
			<MenuTrigger key="trigger">
				<IconButton icon="chevron-down" aria-label="open" />
				<Popover placement="bottom end">
					<Menu>
						<MenuItem>Item one</MenuItem>
						<MenuItem>Item two</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>,
		],
		spacing: 'compact',
	},
};

export const SplitLinkButton: Story = {
	args: {
		children: [
			<LinkButton key="link" href="/hello">
				Split link button
			</LinkButton>,
			<MenuTrigger key="trigger">
				<IconButton icon="chevron-down" aria-label="open" />
				<Popover placement="bottom end">
					<Menu>
						<MenuItem>Item one</MenuItem>
						<MenuItem>Item two</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>,
		],
		spacing: 'compact',
	},
};
