import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { Label } from '../src/Label';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { Popover } from '../src/Popover';
import { Select, SelectValue } from '../src/Select';
import { Text } from '../src/Text';

const meta: Meta<typeof Select> = {
	component: Select,
	subcomponents: { SelectValue } as Record<string, ComponentType<unknown>>,
	title: 'Components/Pickers/Select',
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240], height: vars.size[240] }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Select>;

const open = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('listbox'));
	},
};

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Button>
					<SelectValue />
					<Icon name="chevron-down" size="small" />
				</Button>
				<Text slot="description">Description</Text>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
						<ListBoxItem>Item two</ListBoxItem>
						<ListBoxItem>Item three</ListBoxItem>
					</ListBox>
				</Popover>
			</>
		),
	},
};

export const Descriptions: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Button>
					<SelectValue />
					<Icon name="chevron-down" size="small" />
				</Button>
				<Popover>
					<ListBox>
						<ListBoxItem textValue="Item one">
							<Text slot="label">Item one</Text>
							<Text slot="description">Description one</Text>
						</ListBoxItem>
						<ListBoxItem textValue="Item two">
							<Text slot="label">Item two</Text>
							<Text slot="description">Description two</Text>
						</ListBoxItem>
						<ListBoxItem textValue="Item three">
							<Text slot="label">Item three</Text>
							<Text slot="description">Description three</Text>
						</ListBoxItem>
					</ListBox>
				</Popover>
			</>
		),
		selectedKey: 'react-aria-2',
	},
	...open,
	parameters: {
		// @fixme
		a11y: {
			config: {
				rules: [
					{
						id: 'color-contrast',
						selector: '*:not([slot="description"])',
					},
				],
			},
		},
	},
};

export const States: Story = {
	render: (args) => {
		const Content = (
			<>
				<Button>
					<SelectValue />
					<Icon name="chevron-down" size="small" />
				</Button>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
						<ListBoxItem>Item two</ListBoxItem>
						<ListBoxItem>Item three</ListBoxItem>
					</ListBox>
				</Popover>
			</>
		);
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<Select {...args}>
					<Label>Focus Visible</Label>
					{Content}
				</Select>
				<Select isInvalid {...args}>
					<Label>Invalid</Label>
					{Content}
				</Select>
				<Select isDisabled {...args}>
					<Label>Disabled</Label>
					{Content}
				</Select>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
