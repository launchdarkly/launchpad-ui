import type { Meta, StoryObj } from '@storybook/react';

import { RadioCard } from '../src/RadioCard';

export default {
	component: RadioCard,
	title: 'Legacy/Card/RadioCard',
	description: 'A radio button with a label and optional image and subtext.',
	decorators: [
		(Story) => (
			<div style={{ display: 'flex', width: '15rem' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		chromatic: { disableSnapshot: true },
	},
} as Meta<typeof RadioCard>;

type Story = StoryObj<typeof RadioCard>;

const commonProps = {
	label: 'Label',
	id: 'card',
};

export const Simple: Story = {
	args: {
		...commonProps,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const WithImage: Story = {
	args: {
		...commonProps,
		imgSrc: '/static/swap-me.svg',
		altText: 'swap',
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const WithSubtext: Story = {
	args: {
		...commonProps,
		subText:
			'Provide a description for this feature that does not exceed the height of the adjacent graphic to maintain equal button heights.',
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const Selected: Story = {
	args: {
		...commonProps,
		subText:
			'Provide a description for this feature that does not exceed the height of the adjacent graphic to maintain equal button heights.',
		checked: true,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		...commonProps,
		subText:
			'Provide a description for this feature that does not exceed the height of the adjacent graphic to maintain equal button heights.',
		disabled: true,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};
