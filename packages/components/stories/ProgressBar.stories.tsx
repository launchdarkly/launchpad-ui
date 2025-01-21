import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '../src';

const meta: Meta<typeof ProgressBar> = {
	component: ProgressBar,
	title: 'Components/Status/ProgressBar',
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Example: Story = {
	args: { isIndeterminate: true, 'aria-label': 'loading' },
};
