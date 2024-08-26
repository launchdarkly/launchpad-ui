import type { StoryObj } from '@storybook/react';

import { Toast } from '../src';

export default {
	component: Toast,
	title: 'Legacy/Deprecated/Toast',
	description: 'An element that provides brief messages about app processes with a CTA.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__TOAST,
		},
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
	args: { kind: 'info', content: 'This is a message about an app process.' },
};

export const Warning: Story = {
	args: {
		kind: 'warning',
		content: 'This is a message about an app process.',
	},
};

export const Success: Story = {
	args: {
		kind: 'success',
		content: 'This is a message about an app process.',
	},
};

export const WithLink: Story = {
	args: {
		kind: 'success',
		content: (
			<>
				This has a link. <a href="/">Link</a>
			</>
		),
	},
};
