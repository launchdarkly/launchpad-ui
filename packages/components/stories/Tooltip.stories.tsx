import type { Meta, ReactRenderer, StoryFn, StoryObj } from '@storybook/react';
import type { PlayFunction } from '@storybook/types';

import { expect, userEvent, within } from '@storybook/test';

import { Button, Pressable, Tooltip, TooltipTrigger } from '../src';

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	// @ts-ignore
	subcomponents: { TooltipTrigger, Pressable },
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

const play: PlayFunction<ReactRenderer> = async ({
	canvasElement,
}: {
	canvasElement: HTMLElement;
}) => {
	const canvas = within(canvasElement);

	await userEvent.hover(canvasElement);
	await userEvent.hover(canvas.getByRole('button'));
	const body = canvasElement.ownerDocument.body;
	await expect(await within(body).findByRole('tooltip'));
};

export const Example: Story = {
	render: (args) => {
		return (
			<TooltipTrigger>
				<Button>Trigger</Button>
				<Tooltip {...args}>Message</Tooltip>
			</TooltipTrigger>
		);
	},
	play,
};

export const CustomTrigger: Story = {
	render: (args) => {
		return (
			<TooltipTrigger>
				<Pressable>Trigger</Pressable>
				<Tooltip {...args}>Message</Tooltip>
			</TooltipTrigger>
		);
	},
	play,
};

export const Popover: Story = {
	render: (args) => {
		return (
			<TooltipTrigger>
				<Button>Trigger</Button>
				<Tooltip variant="popover" {...args}>
					Message
				</Tooltip>
			</TooltipTrigger>
		);
	},
	play,
};
