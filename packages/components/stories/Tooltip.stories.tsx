import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { Button, Tooltip, TooltipTrigger } from '../src';

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	// @ts-ignore
	subcomponents: { TooltipTrigger },
	title: 'Components/Overlays/Tooltip',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		chromatic: { pauseAnimationAtEnd: true },
		a11y: {
			element: '[data-overlay-container]',
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div style={{ height: 'var(--lp-size-96)' }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Example: Story = {
	render: (args) => {
		return (
			<TooltipTrigger>
				<Button>Trigger</Button>
				<Tooltip {...args}>Message</Tooltip>
			</TooltipTrigger>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.hover(canvasElement);
		await userEvent.hover(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('tooltip'));
	},
};
