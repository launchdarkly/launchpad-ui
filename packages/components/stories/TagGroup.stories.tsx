import type { Meta, StoryObj } from '@storybook/react';

import { userEvent } from '@storybook/test';
import { useListData } from 'react-stately';

import { Label, Tag, TagGroup, TagList } from '../src';

const meta: Meta<typeof TagGroup> = {
	component: TagGroup,
	// @ts-ignore
	subcomponents: { TagList, Tag },
	title: 'Components/Collections/TagGroup',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
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
				</TagList>
			</>
		),
	},
};
