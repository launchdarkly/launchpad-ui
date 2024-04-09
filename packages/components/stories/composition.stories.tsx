import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef, Fragment } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { expect, userEvent, within } from '@storybook/test';
import {
	Button,
	ComboBox,
	ComboBoxClearButton,
	Dialog,
	DialogTrigger,
	Group,
	Input,
	ListBox,
	ListBoxItem,
	Popover,
	Tooltip,
	TooltipTrigger,
} from '../src';

const Container = (props: ComponentPropsWithoutRef<typeof Fragment>) => <>{props.children}</>;

const meta: Meta<typeof Container> = {
	title: 'Recipes/Composition',
	component: Container,
	parameters: {
		chromatic: { pauseAnimationAtEnd: true },
	},
	decorators: [
		(Story: StoryFn) => (
			<div style={{ height: 'var(--lp-size-224)' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		children: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Container>;

// TODO: show toast on press once RAC version is built
export const CopyToClipboard: Story = {
	args: {
		children: (
			<TooltipTrigger>
				<Button size="small" onPress={() => navigator.clipboard.writeText('content')}>
					Copy content <Icon name="copy-clipboard" size="small" />
				</Button>
				<Tooltip placement="bottom">Copy to clipboard</Tooltip>
			</TooltipTrigger>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.hover(canvasElement);
		await userEvent.hover(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('tooltip'));
	},
};

export const ComboBoxDialog: Story = {
	args: {
		children: (
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover trigger="ComboBoxDialog" placement="bottom start">
					<Dialog>
						{/* @ts-ignore */}
						<ComboBox aria-label="list" autoFocus menuTrigger="focus" allowsEmptyCollection>
							<Group>
								<Icon name="search" size="small" />
								<Input />
								<ComboBoxClearButton />
							</Group>
							<ListBox>
								<ListBoxItem>Item one</ListBoxItem>
								<ListBoxItem>Item two</ListBoxItem>
								<ListBoxItem>Item three</ListBoxItem>
							</ListBox>
						</ComboBox>
					</Dialog>
				</Popover>
			</DialogTrigger>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
	},
	name: 'ComboBoxDialog',
};
