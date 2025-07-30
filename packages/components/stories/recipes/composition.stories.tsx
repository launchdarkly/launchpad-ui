import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentPropsWithoutRef } from 'react';
import type { ListBoxItemProps } from '../../src/ListBox';

import { Box } from '@launchpad-ui/box';
import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { type Fragment, useRef, useState } from 'react';
import { VisuallyHidden } from 'react-aria';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../../src/Button';
import { ButtonGroup } from '../../src/ButtonGroup';
import { ComboBox, ComboBoxClearButton } from '../../src/ComboBox';
import { Dialog, DialogTrigger } from '../../src/Dialog';
import { Group } from '../../src/Group';
import { Heading } from '../../src/Heading';
import { IconButton } from '../../src/IconButton';
import { Input } from '../../src/Input';
import { Label } from '../../src/Label';
import { ListBox, ListBoxItem } from '../../src/ListBox';
import { Modal, ModalOverlay } from '../../src/Modal';
import { Perceivable } from '../../src/Perceivable';
import { Popover } from '../../src/Popover';
import { RadioButton } from '../../src/RadioButton';
import { RadioGroup } from '../../src/RadioGroup';
import { RadioIconButton } from '../../src/RadioIconButton';
import { Select, SelectValue } from '../../src/Select';
import { Text } from '../../src/Text';
import { ToastRegion, toastQueue } from '../../src/Toast';
import { ToggleButton } from '../../src/ToggleButton';
import { Tooltip, TooltipTrigger } from '../../src/Tooltip';

const Container = (props: ComponentPropsWithoutRef<typeof Fragment>) => <>{props.children}</>;

const meta: Meta<typeof Container> = {
	component: Container,
	decorators: [
		(Story) => (
			<div style={{ minHeight: 'var(--lp-size-208)' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		children: {
			control: false,
		},
	},
	tags: ['!dev', '!autodocs'],
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
							toastQueue.add({ title: 'Copied!', status: 'success' });
						}}
					>
						Copy content <Icon name="copy-clipboard" size="small" />
					</Button>
					<Tooltip placement="bottom">Copy to clipboard</Tooltip>
				</TooltipTrigger>
				<ToastRegion />
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
					</ButtonGroup>
				</RadioGroup>
				<RadioGroup defaultValue="1">
					<Label>RadioIconButton</Label>
					<ButtonGroup spacing="compact" role="presentation" orientation="vertical">
						<RadioIconButton icon="flag" value="1" aria-label="flag" />
						<RadioIconButton icon="flask" value="2" aria-label="flask" />
						<RadioIconButton icon="key" value="3" aria-label="key" />
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
		const [isDisabled, setIsDisabled] = useState(true);
		return (
			<div
				style={{
					display: 'inline-flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<ToggleButton isSelected={isDisabled} onChange={setIsDisabled}>
					Restrict
				</ToggleButton>
				<DialogTrigger>
					<Perceivable isDisabled={isDisabled}>
						<TooltipTrigger>
							<Button onPress={() => console.log('Pressed')}>Button</Button>
							<Tooltip placement="right">Message</Tooltip>
						</TooltipTrigger>
						<Popover>Message</Popover>
					</Perceivable>
				</DialogTrigger>
				<DialogTrigger>
					<Perceivable isDisabled={isDisabled}>
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
						<ModalOverlay>
							<Modal>
								<Dialog>
									{({ close }) => (
										<>
											<div slot="header">
												<Heading slot="title">Title</Heading>
												<IconButton
													aria-label="close"
													icon="cancel"
													size="small"
													variant="minimal"
													onPress={close}
												/>
												<Text slot="subtitle">Subtitle</Text>
											</div>
											<div slot="body">Body text</div>
											<div slot="footer">
												<Button slot="close">Cancel</Button>
												<Button variant="primary">Confirm</Button>
											</div>
										</>
									)}
								</Dialog>
							</Modal>
						</ModalOverlay>
					</Perceivable>
				</DialogTrigger>
			</div>
		);
	},
};

export const Pagination: Story = {
	render: () => {
		return (
			<Box display="flex" alignItems="center">
				<IconButton icon="chevrons-left" size="small" variant="minimal" aria-label="first" />
				<IconButton icon="chevron-left" size="small" variant="minimal" aria-label="previous" />
				<Box display="flex" alignItems="center" gap="$200" marginInline="$200">
					<Text bold>1-2</Text>
					<Text> of </Text>
					<Text bold>4</Text>
				</Box>
				<IconButton icon="chevron-right" size="small" variant="minimal" aria-label="next" />
				<IconButton icon="chevrons-right" size="small" variant="minimal" aria-label="last" />
			</Box>
		);
	},
};
