import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { useListData } from 'react-stately';
import { userEvent } from 'storybook/test';

import { Label } from '../src/Label';
import { Tag, TagGroup, TagList } from '../src/TagGroup';

const meta: Meta<typeof TagGroup> = {
	component: TagGroup,
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-32263&m=dev',
		},
	},
	subcomponents: { TagList, Tag } as Record<string, ComponentType<unknown>>,
	title: 'Components/Collections/TagGroup',
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<TagList>
					<Tag>One</Tag>
					<Tag>Two</Tag>
					<Tag>Three</Tag>
				</TagList>
			</>
		),
	},
};

export const Small: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<TagList>
					<Tag size="small">One</Tag>
					<Tag size="small">Two</Tag>
					<Tag size="small">Three</Tag>
				</TagList>
			</>
		),
	},
};

export const Removable: Story = {
	render: (args) => {
		const list = useListData({
			initialItems: [
				{ id: 1, name: 'One' },
				{ id: 2, name: 'Two' },
				{ id: 3, name: 'Three' },
			],
		});
		return (
			<TagGroup onRemove={(keys) => list.remove(...keys)} {...args}>
				<Label>Label</Label>
				<TagList items={list.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
			</TagGroup>
		);
	},
};

export const SmallRemovable: Story = {
	render: (args) => {
		const list = useListData({
			initialItems: [
				{ id: 1, name: 'One' },
				{ id: 2, name: 'Two' },
				{ id: 3, name: 'Three' },
			],
		});
		return (
			<TagGroup onRemove={(keys) => list.remove(...keys)} {...args}>
				<Label>Label</Label>
				<TagList items={list.items}>{(item) => <Tag size="small">{item.name}</Tag>}</TagList>
			</TagGroup>
		);
	},
};

export const States: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<TagList>
					<Tag>Selected</Tag>
					<Tag>Focus Visible</Tag>
					<Tag>Disabled</Tag>
				</TagList>
			</>
		),
		selectionMode: 'multiple',
		selectedKeys: ['react-aria-1'],
		disabledKeys: ['react-aria-3'],
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
		await userEvent.keyboard('{arrowdown}');
	},
};

export const Variants: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<TagList>
					<Tag>Default</Tag>
					<Tag variant="success">Success</Tag>
					<Tag variant="warning">Warning</Tag>
					<Tag variant="error">Error</Tag>
					<Tag variant="beta">Beta</Tag>
					<Tag variant="federal">Federal</Tag>
					<Tag variant="new">New</Tag>
					<Tag variant="info">Info</Tag>
				</TagList>
			</>
		),
	},
};

export const Selection: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<TagList>
					<Tag>One</Tag>
					<Tag>Two</Tag>
					<Tag>Three</Tag>
				</TagList>
			</>
		),
		selectionMode: 'multiple',
	},
};
