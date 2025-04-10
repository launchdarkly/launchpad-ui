import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';

import { Label, Meter } from '../src';

const meta: Meta<typeof Meter> = {
	component: Meter,
	title: 'Components/Status/Meter',
	parameters: {
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
	args: { value: 14, 'aria-label': 'percent diff' },
};

export const Values: Story = {
	render: () => {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<Meter value={1} aria-label="1" />
				<Meter value={25} aria-label="25" />
				<Meter value={100} aria-label="100" />
			</div>
		);
	},
};

export const Bar: Story = {
	args: { variant: 'bar', value: 75, children: <Label>Loading…</Label> },
};
