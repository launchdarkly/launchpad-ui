import type { Meta, StoryObj } from '@storybook/react-vite';

import { LinkButton } from '../src/LinkButton';

const meta: Meta<typeof LinkButton> = {
	component: LinkButton,
	title: 'Components/Navigation/LinkButton',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8079-92439&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Example: Story = {
	args: {
		children: 'LinkButton',
		href: { pathname: 'test' },
		routerOptions: { state: { foo: 'bar' } },
	},
};
