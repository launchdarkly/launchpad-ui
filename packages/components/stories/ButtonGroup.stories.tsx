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
	argTypes: {
		// Only show LaunchPad-specific props
		spacing: {
			control: { type: 'radio' },
			options: ['basic', 'compact', 'large'],
		},
		orientation: {
			control: { type: 'radio' },
			options: ['horizontal', 'vertical'],
		},
		children: { control: false },

		// Keep a few essential accessibility/state props
		isDisabled: { control: { type: 'boolean' } },
		'aria-label': { control: { type: 'text' } },

		// Hide all other React Aria props systematically
		ref: { table: { disable: true } },
		isInvalid: { table: { disable: true } },
		role: { table: { disable: true } },
		'aria-labelledby': { table: { disable: true } },
		'aria-describedby': { table: { disable: true } },
		'aria-details': { table: { disable: true } },
		className: { table: { disable: true } },
		onHoverStart: { table: { disable: true } },
		onHoverEnd: { table: { disable: true } },
		onHoverChange: { table: { disable: true } },
		style: { table: { disable: true } },
		id: { table: { disable: true } },
		slot: { table: { disable: true } },
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
