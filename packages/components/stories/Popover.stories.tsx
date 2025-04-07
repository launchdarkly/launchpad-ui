import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';
import type { PlayFunction } from 'storybook/internal/types';

import { expect, userEvent, within } from 'storybook/test';

import { Button, Dialog, DialogTrigger, Heading, OverlayArrow, Popover, Pressable } from '../src';

const meta: Meta<typeof Popover> = {
	component: Popover,
	subcomponents: { OverlayArrow, DialogTrigger } as Record<string, ComponentType<unknown>>,
	title: 'Components/Overlays/Popover',
	parameters: {
		chromatic: { pauseAnimationAtEnd: true },
	},
	decorators: [
		(Story) => (
			<div style={{ height: 'var(--lp-size-144)' }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Popover>;

const play: PlayFunction<ReactRenderer> = async ({
	canvasElement,
}: {
	canvasElement: HTMLElement;
}) => {
	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByRole('button'));
	const body = canvasElement.ownerDocument.body;
	await expect(await within(body).findByRole('dialog'));
};

export const Example: Story = {
	render: (args) => {
		return (
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover {...args}>
					<Dialog>Message</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	play,
};

export const WithArrow: Story = {
	render: (args) => {
		return (
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover {...args}>
					<OverlayArrow />
					<Dialog>Message</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	play,
};

export const WithHeading: Story = {
	render: (args) => {
		return (
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover {...args}>
					<Dialog>
						<Heading slot="title">Title</Heading>
						<div>Message</div>
					</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	play,
};

export const CustomTrigger: Story = {
	render: (args) => {
		return (
			<DialogTrigger>
				<Pressable>
					{/* biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
					<span role="button">Trigger</span>
				</Pressable>
				<Popover {...args}>
					<Dialog>Message</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	play,
};
