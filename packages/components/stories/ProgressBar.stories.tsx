import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../src/Label';
import { ProgressBar } from '../src/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
	component: ProgressBar,
	title: 'Components/Status/ProgressBar',
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Example: Story = {
	args: { isIndeterminate: true, 'aria-label': 'loading' },
};

export const Bar: Story = {
	args: { variant: 'bar', value: 30, children: <Label>Loading…</Label> },
};
