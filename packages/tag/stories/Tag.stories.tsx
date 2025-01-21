import type { StoryObj } from '@storybook/react';

import { Button, IconButton } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';

import { MOCK_TAGS } from '../__tests__/constants';
import { TagGroup, TagItem } from '../src';

export default {
	component: TagGroup,
	title: 'Legacy/TagGroup',
	description:
		'Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__TAG,
		},
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof TagGroup>;

export const ReadOnly: Story = {
	render: () => {
		return <TagGroup items={MOCK_TAGS}>{(item) => <TagItem>{item.name}</TagItem>}</TagGroup>;
	},
};

export const ReadOnlyTiny: Story = {
	render: () => {
		return (
			<TagGroup size="tiny" items={MOCK_TAGS}>
				{(item) => <TagItem>{item.name}</TagItem>}
			</TagGroup>
		);
	},
};

export const Removable: Story = {
	render: () => {
		const Component = () => {
			const [items, setItems] = useState(MOCK_TAGS);

			return (
				<TagGroup
					onRemove={(keys) => {
						setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
					}}
					items={items}
				>
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			);
		};

		return <Component />;
	},
};

export const RemovableTiny: Story = {
	render: () => {
		const Component = () => {
			const [items, setItems] = useState(MOCK_TAGS);

			return (
				<TagGroup
					size="tiny"
					onRemove={(keys) => {
						setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
					}}
					items={items}
				>
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			);
		};

		return <Component />;
	},
};

export const WithClearAction: Story = {
	render: () => {
		const Component = () => {
			const [items, setItems] = useState(MOCK_TAGS);

			return (
				<TagGroup
					onRemove={(keys) => {
						setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
					}}
					hideActionWhenEmpty
					items={items}
					action={({ size }) => (
						<Button size={size} onClick={() => setItems([])} aria-label="Clear">
							Clear
						</Button>
					)}
				>
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			);
		};

		return <Component />;
	},
};

export const WithClearActionTiny: Story = {
	render: () => {
		const Component = () => {
			const [items, setItems] = useState(MOCK_TAGS);

			return (
				<TagGroup
					onRemove={(keys) => {
						setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
					}}
					size="tiny"
					hideActionWhenEmpty
					items={items}
					action={({ size }) => (
						<Button size={size} onClick={() => setItems([])} aria-label="Clear">
							Clear
						</Button>
					)}
				>
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			);
		};

		return <Component />;
	},
};

export const WithCustomAction: Story = {
	render: () => {
		const Component = () => {
			const [items, setItems] = useState(MOCK_TAGS);

			return (
				<TagGroup
					onRemove={(keys) => {
						setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
					}}
					hideActionWhenEmpty
					items={items}
					action={() => (
						<IconButton
							aria-label="Custom"
							icon={<Icon name="edit" />}
							size="small"
							onClick={() => alert('Pressed custom action')}
						/>
					)}
				>
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			);
		};

		return <Component />;
	},
};

export const WithMaxRows: Story = {
	render: () => {
		return (
			<div style={{ maxWidth: 290, border: '1px solid #efefef', padding: '0.625rem' }}>
				<TagGroup maxRows={2} items={MOCK_TAGS}>
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			</div>
		);
	},
};

export const WithMaxRowsTiny: Story = {
	render: () => {
		return (
			<div style={{ maxWidth: 290, border: '1px solid #efefef', padding: '0.625rem' }}>
				<TagGroup maxRows={2} items={MOCK_TAGS} size="tiny">
					{(item) => <TagItem>{item.name}</TagItem>}
				</TagGroup>
			</div>
		);
	},
};

export const WithTooltips: Story = {
	render: () => {
		return (
			<TagGroup items={MOCK_TAGS}>
				{(item) => <TagItem tooltip={`Tag: ${item.name}`}>{item.name}</TagItem>}
			</TagGroup>
		);
	},
};

export const WithCustomTagContent: Story = {
	render: () => {
		return (
			<TagGroup items={MOCK_TAGS}>
				{(item) => (
					<TagItem>
						<Icon name="star" size="small" style={{ transform: 'translateY(-1px)' }} /> {item.name}
					</TagItem>
				)}
			</TagGroup>
		);
	},
};

export const WithTagItemRenderedAs: Story = {
	render: () => {
		return (
			<TagGroup items={MOCK_TAGS}>
				{(item) => (
					<TagItem as="a" href="/">
						{item.name}
					</TagItem>
				)}
			</TagGroup>
		);
	},
};

export const WithOnTagClick: Story = {
	render: () => {
		return (
			<TagGroup onTagClick={(key) => alert(`Clicked ${key}`)} items={MOCK_TAGS}>
				{(item) => <TagItem>{item.name}</TagItem>}
			</TagGroup>
		);
	},
};

export const WithOnTagClickTiny: Story = {
	render: () => {
		return (
			<TagGroup size="tiny" onTagClick={(key) => alert(`Clicked ${key}`)} items={MOCK_TAGS}>
				{(item) => <TagItem>{item.name}</TagItem>}
			</TagGroup>
		);
	},
};
