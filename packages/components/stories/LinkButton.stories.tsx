import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from '../src';

const meta: Meta<typeof LinkButton> = {
	component: LinkButton,
	title: 'Components/Navigation/LinkButton',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
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
