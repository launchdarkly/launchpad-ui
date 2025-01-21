import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from '../src';

const meta: Meta<typeof LinkButton> = {
	component: LinkButton,
	title: 'Components/Navigation/LinkButton',
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
