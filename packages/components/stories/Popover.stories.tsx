import type { Meta, ReactRenderer, StoryFn, StoryObj } from '@storybook/react';
import type { PlayFunction } from '@storybook/types';

import { expect, userEvent, within } from '@storybook/test';

import {
	Button,
	Dialog,
	DialogTrigger,
	Heading,
	HoverTrigger,
	OverlayArrow,
	Popover,
	Pressable,
} from '../src';

const meta: Meta<typeof Popover> = {
	component: Popover,
	// @ts-ignore
	subcomponents: { OverlayArrow, DialogTrigger, HoverTrigger },
	title: 'Components/Overlays/Popover',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		chromatic: { pauseAnimationAtEnd: true },
		a11y: {
			element: '[data-trigger]',
		},
	},
	decorators: [
		(Story: StoryFn) => (
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

export const Hover: Story = {
	render: (args) => {
		return (
			<HoverTrigger>
				<Button>Trigger</Button>
				<Popover {...args}>
					<Dialog>Message</Dialog>
				</Popover>
			</HoverTrigger>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.hover(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('dialog'));
	},
};

export const CustomTrigger: Story = {
	render: (args) => {
		return (
			<DialogTrigger>
				<Pressable>Trigger</Pressable>
				<Popover {...args}>
					<Dialog>Message</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	play,
};
