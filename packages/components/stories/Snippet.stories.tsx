import type { Meta, StoryObj } from '@storybook/react-vite';

import { Snippet } from '../src/Snippet';

const meta: Meta<typeof Snippet> = {
	component: Snippet,
	title: 'Components/Forms/Snippet',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=14383-120499&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Snippet>;

const json = JSON.stringify(
	{
		key: 'test@test.com',
		ip: '192.168.0.1',
		custom: {
			customerRanking: 10004,
		},
	},
	null,
	2,
);

export const Example: Story = {
	args: {
		children: json,
		lang: 'json',
		withCopyButton: true,
	},
};
