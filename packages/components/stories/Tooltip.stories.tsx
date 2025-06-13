import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import type { PlayFunction } from 'storybook/internal/types';

import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { Focusable } from '../src/Focusable';
import { Tooltip, TooltipTrigger } from '../src/Tooltip';

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	subcomponents: { TooltipTrigger, Focusable } as Record<string, ComponentType<unknown>>,
	title: 'Components/Overlays/Tooltip',
	decorators: [
		(Story) => (
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
				<Focusable>
					{/* biome-ignore lint/a11y/useFocusableInteractive: ignore */}
					<span role="button">Trigger</span>
				</Focusable>
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
