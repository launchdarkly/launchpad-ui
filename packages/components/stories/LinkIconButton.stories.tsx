import type { Meta, StoryObj } from '@storybook/react-vite';

import { LinkIconButton } from '../src/LinkIconButton';

const meta: Meta<typeof LinkIconButton> = {
	component: LinkIconButton,
	title: 'Components/Navigation/LinkIconButton',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8079-92746&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof LinkIconButton>;

export const Example: Story = {
	args: { icon: 'add', 'aria-label': 'create', href: '/test' },
};

export const Small: Story = {
	args: { icon: 'add', 'aria-label': 'create', href: '/test', size: 'small' },
};
