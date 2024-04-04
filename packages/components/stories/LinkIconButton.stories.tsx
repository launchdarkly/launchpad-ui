import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { LinkIconButton } from '../src';

const meta: Meta<typeof LinkIconButton> = {
	component: LinkIconButton,
	title: 'React Aria Components/Navigation/LinkIconButton',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};

export default meta;

type Story = StoryObj<typeof LinkIconButton>;

export const Example: Story = {
	args: { icon: 'add', 'aria-label': 'create', to: '/' },
};

export const Small: Story = {
	args: { icon: 'add', 'aria-label': 'create', to: '/', size: 'small' },
};
