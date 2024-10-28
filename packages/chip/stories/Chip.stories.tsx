import type { StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

import { Chip } from '../src';

export default {
	component: Chip,
	title: 'Legacy/Deprecated/Chip',
	description: 'Chips can be used as visual indicators for tags.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__CHIP,
		},
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		className: {
			table: {
				category: 'Presentation',
			},
		},
		kind: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
	},
};

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
	args: { children: 'Default Chip' },
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const Success: Story = { args: { children: 'Success Chip', kind: 'success' } };

export const Warning: Story = { args: { children: 'Warning Chip', kind: 'warning' } };

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error: Story = { args: { children: 'Error Chip', kind: 'error' } };

export const Info: Story = { args: { children: 'Info Chip', kind: 'info' } };

export const New: Story = { args: { children: 'New Chip', kind: 'new' } };

export const Federal: Story = { args: { children: 'Federal Chip', kind: 'federal' } };

export const Beta: Story = { args: { children: 'Beta Chip', kind: 'beta' } };

export const Tiny: Story = { args: { children: 'Tiny Chip', size: 'tiny', kind: 'success' } };

export const WithIcon: Story = {
	args: { children: 'Chip', icon: <Icon name="star" />, kind: 'success' },
};

export const TinyWithIcon: Story = {
	args: { children: 'Tiny Chip', icon: <Icon name="star" />, size: 'tiny', kind: 'success' },
};
