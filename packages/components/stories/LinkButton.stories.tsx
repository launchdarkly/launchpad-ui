import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { LinkButton } from '../src';

const meta: Meta<typeof LinkButton> = {
	component: LinkButton,
	title: 'Components/Navigation/LinkButton',
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

type Story = StoryObj<typeof LinkButton>;

export const Example: Story = {
	args: { children: 'LinkButton', to: '/' },
};
