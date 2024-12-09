import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from '@storybook/test';
import { type Fragment, useRef, useState } from 'react';
import { VisuallyHidden } from 'react-aria';

import {
	Button,
	ButtonGroup,
	ComboBox,
	ComboBoxClearButton,
	Dialog,
	DialogTrigger,
	Group,
	IconButton,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	type ListBoxItemProps,
	Perceivable,
	Popover,
	RadioButton,
	RadioGroup,
	RadioIconButton,
	Select,
	SelectValue,
	TagButton,
	Text,
	ToastContainer,
	ToastQueue,
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
		(Story) => (
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

export const CopyToClipboard: Story = {
	args: {
		children: (
			<>
				<TooltipTrigger>
					<Button
						size="small"
						onPress={() => {
							navigator.clipboard.writeText('content');
							ToastQueue.success('Copied!');
						}}
					>
						Copy content <Icon name="copy-clipboard" size="small" />
					</Button>
					<Tooltip placement="bottom">Copy to clipboard</Tooltip>
				</TooltipTrigger>
				<ToastContainer />
			</>
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

export const RadioButtonGroup: Story = {
	args: {
		children: (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<RadioGroup defaultValue="1">
					<Label>RadioButton</Label>
					<ButtonGroup spacing="compact" role="presentation">
						<RadioButton value="1">First</RadioButton>
						<RadioButton value="2">Second</RadioButton>
						<RadioButton value="3">Third</RadioButton>
						<RadioButton value="4">Fourth</RadioButton>
						<RadioButton value="5">Fifth</RadioButton>
					</ButtonGroup>
				</RadioGroup>
				<RadioGroup defaultValue="1">
					<Label>RadioIconButton</Label>
					<ButtonGroup spacing="compact" role="presentation" orientation="vertical">
						<RadioIconButton icon="flag" value="1" aria-label="flag" />
						<RadioIconButton icon="flask" value="2" aria-label="flask" />
						<RadioIconButton icon="key" value="3" aria-label="key" />
						<RadioIconButton icon="lock" value="4" aria-label="lock" />
						<RadioIconButton icon="robot" value="5" aria-label="robot" />
					</ButtonGroup>
				</RadioGroup>
			</div>
		),
	},
	name: 'RadioButtonGroup',
};

export const ListBoxTooltip: Story = {
	render: () => {
		const [isOpen, setOpen] = useState(false);

		const options = [
			{ id: 1, name: 'Item one', description: 'Description one' },
			{ id: 2, name: 'Item two', description: 'Description two' },
			{ id: 3, name: 'Item three', description: 'Description three' },
		];

		const MyItem = (props: ListBoxItemProps<(typeof options)[number]>) => {
			const ref = useRef(null);
			return (
				<ListBoxItem ref={ref} {...props}>
					{({ isFocused }) => {
						return (
							/* @ts-expect-error render props */
							<>
								{props.children}
								<TooltipTrigger isOpen={isFocused}>
									<Tooltip triggerRef={ref} placement="right" offset={8}>
										{props.value?.description}
									</Tooltip>
								</TooltipTrigger>
							</>
						);
					}}
				</ListBoxItem>
			);
		};

		return (
			<div
				style={{
					width: vars.size[240],
				}}
			>
				<Select isOpen={isOpen} onOpenChange={setOpen}>
					<Label>Select</Label>
					<Button>
						<SelectValue />
						<Icon name="chevron-down" size="small" />
					</Button>
					<Popover>
						<ListBox items={options}>
							{(item) => (
								<MyItem textValue={item.name}>
									<Text slot="label">{item.name}</Text>
									<VisuallyHidden>
										<Text slot="description">{item.description}</Text>
									</VisuallyHidden>
								</MyItem>
							)}
						</ListBox>
					</Popover>
				</Select>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
	},
	name: 'ListBox Tooltip',
};

export const DisabledWithTooltip: Story = {
	render: () => {
		return (
			<div
				style={{
					display: 'inline-flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<Perceivable>
					<TooltipTrigger>
						<Button onPress={() => console.log('Pressed')}>Button</Button>
						<Tooltip placement="right">Message</Tooltip>
					</TooltipTrigger>
					<TooltipTrigger>
						<IconButton
							icon="add"
							size="small"
							variant="minimal"
							aria-label="create"
							onPress={() => console.log('Pressed')}
						/>
						<Tooltip placement="right">Message</Tooltip>
					</TooltipTrigger>
				</Perceivable>
			</div>
		);
	},
};

export const TagWithOverlay: Story = {
	render: () => {
		return (
			<TooltipTrigger>
				<TagButton>
					<Icon name="osmo" size="small" />
					TagButton
				</TagButton>
				<Tooltip placement="right">Message</Tooltip>
			</TooltipTrigger>
		);
	},
};
