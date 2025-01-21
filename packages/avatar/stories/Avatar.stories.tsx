import type { StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

import { Avatar } from '../src';

export default {
	component: Avatar,
	title: 'Legacy/Avatar',
	description: 'An element that represents a user visually.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__AVATAR,
		},
	},
	argTypes: {
		size: {
			table: {
				category: 'Presentation',
			},
		},
	},
};

type Story = StoryObj<typeof Avatar>;

export const DefaultIcon: Story = {
	args: {
		url: '',
	},
};

export const Image: Story = {
	args: {
		url: 'https://picsum.photos/id/1025/200/200',
		alt: 'Pugsy Darkly',
		defaultIcon: <Icon name="person" />,
	},
};

export const Initials: Story = {
	args: {
		url: '',
		'aria-label': 'Lance Darkly',
		initials: 'LD',
	},
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

export const TinySize: Story = {
	args: {
		size: 'tiny',
		'aria-label': 'Lance Darkly',
		initials: 'LD',
	},
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

export const SmallSize: Story = {
	args: {
		size: 'small',
		'aria-label': 'Claire Bravo',
		initials: 'CB',
	},
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

export const MediumSize: Story = {
	args: {
		size: 'medium',
		'aria-label': 'Julia Darkly',
		initials: 'JD',
	},
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

export const LargeSize: Story = {
	args: {
		size: 'large',
		'aria-label': 'Mike Rongers',
		initials: 'MR',
	},
};
