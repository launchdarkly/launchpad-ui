import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../src/Label';
import { ProgressBar } from '../src/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
	component: ProgressBar,
	title: 'Components/Status/ProgressBar',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8079-96310&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Example: Story = {
	args: { isIndeterminate: true, 'aria-label': 'loading' },
};

export const Bar: Story = {
	args: { variant: 'bar', value: 30, children: <Label>Loading…</Label> },
};
