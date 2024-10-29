import type { Meta, StoryObj } from '@storybook/react';

import { Meter } from '../src';

const meta: Meta<typeof Meter> = {
	component: Meter,
	title: 'Components/Status/Meter',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		a11y: {
			options: {
				rules: {
					// https://github.com/adobe/react-spectrum/issues/6627#issuecomment-2192595638
					'aria-allowed-attr': { enabled: false },
					'aria-prohibited-attr': { enabled: false },
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Meter>;

export const Example: Story = {
	args: { value: 40, 'aria-label': 'percent diff' },
};
