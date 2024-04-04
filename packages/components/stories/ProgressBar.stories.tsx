import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '../src';

const meta: Meta<typeof ProgressBar> = {
	component: ProgressBar,
	title: 'React Aria Components/Status/ProgressBar',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Example: Story = {
	args: { isIndeterminate: true, 'aria-label': 'loading' },
};
