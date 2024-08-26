import type { StoryObj } from '@storybook/react';

import { StatusIcon } from '../src';

export default {
	component: StatusIcon,
	title: 'Legacy/Deprecated/Icon/StatusIcon',
	description:
		'Flair icons can be used as either square or circular icons with gradient backgrounds.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
		},
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof StatusIcon>;

export const Success: Story = {
	args: { kind: 'success' },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error: Story = {
	args: { kind: 'error' },
};

export const Info: Story = {
	args: { kind: 'info' },
};

export const Warning: Story = {
	args: { kind: 'warning' },
};
