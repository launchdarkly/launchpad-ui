import type { Meta, StoryObj } from '@storybook/react';
import type { Selection } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';

import { Text } from '../src/Text';
import { Tree, TreeItem, TreeItemContent } from '../src/Tree';

const meta: Meta<typeof Tree> = {
	component: Tree,
	title: 'Components/Collections/Tree',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Tree>;

export const Default: Story = {
	args: {
		'aria-label': 'File System',
	},
	render: (args) => (
		<Tree {...args} defaultExpandedKeys={['documents', 'photos', 'project']}>
			<TreeItem id="documents" textValue="Documents">
				<TreeItemContent>Documents</TreeItemContent>
				<TreeItem id="project" textValue="Project">
					<TreeItemContent>Project</TreeItemContent>
					<TreeItem id="report" textValue="Weekly Report">
						<TreeItemContent>Weekly Report</TreeItemContent>
					</TreeItem>
				</TreeItem>
			</TreeItem>
			<TreeItem id="photos" textValue="Photos">
				<TreeItemContent>Photos</TreeItemContent>
				<TreeItem id="image1" textValue="Image 1">
					<TreeItemContent>
						<Icon name="analyze" size="small" /> Image 1
					</TreeItemContent>
				</TreeItem>
				<TreeItem id="image2" textValue="Image 2">
					<TreeItemContent>
						<Icon name="application" size="small" /> Image 2
					</TreeItemContent>
				</TreeItem>
			</TreeItem>
		</Tree>
	),
};

export const SingleSelection: Story = {
	args: {
		'aria-label': 'File System with Single Selection',
	},
	render: (args) => {
		const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['photos']));
		return (
			<Tree
				{...args}
				selectionMode="single"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				defaultExpandedKeys={['documents', 'photos']}
			>
				<TreeItem id="documents" textValue="Documents">
					<TreeItemContent>
						<Icon name="folders" size="small" /> Documents
					</TreeItemContent>
					<TreeItem id="project" textValue="Project">
						<TreeItemContent>
							<Icon name="folders" size="small" /> Project
						</TreeItemContent>
					</TreeItem>
				</TreeItem>
				<TreeItem id="photos" textValue="Photos">
					<TreeItemContent>
						<Icon name="folders" size="small" /> Photos
					</TreeItemContent>
					<TreeItem id="image1" textValue="Image 1">
						<TreeItemContent>
							<Icon name="folders" size="small" /> Image 1
						</TreeItemContent>
					</TreeItem>
				</TreeItem>
			</Tree>
		);
	},
};

export const MultipleSelection: Story = {
	args: {
		'aria-label': 'File System with Multiple Selection',
	},
	render: (args) => {
		const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['photos', 'image1']));
		return (
			<Tree
				{...args}
				selectionMode="multiple"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				defaultExpandedKeys={['documents', 'photos']}
			>
				<TreeItem id="documents" textValue="Documents">
					<TreeItemContent>
						<Icon name="folders" size="small" /> Documents
					</TreeItemContent>
					<TreeItem id="project" textValue="Project">
						<TreeItemContent>
							<Icon name="folders" size="small" /> Project
						</TreeItemContent>
					</TreeItem>
				</TreeItem>
				<TreeItem id="photos" textValue="Photos">
					<TreeItemContent>
						<Icon name="folders" size="small" /> Photos
					</TreeItemContent>
					<TreeItem id="image1" textValue="Image 1">
						<TreeItemContent>
							<Icon name="folders" size="small" /> Image 1
						</TreeItemContent>
					</TreeItem>
				</TreeItem>
			</Tree>
		);
	},
};

export const DisallowEmptySelection: Story = {
	args: {
		'aria-label': 'File System with Required Selection',
	},
	render: (args) => {
		const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['photos']));
		return (
			<Tree
				{...args}
				selectionMode="single"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
				defaultExpandedKeys={['documents', 'photos']}
			>
				<TreeItem id="documents" textValue="Documents">
					<TreeItemContent>
						<Icon name="folders" size="small" /> Documents
					</TreeItemContent>
					<TreeItem id="project" textValue="Project">
						<TreeItemContent>
							<Icon name="folders" size="small" /> Project
						</TreeItemContent>
					</TreeItem>
				</TreeItem>
				<TreeItem id="photos" textValue="Photos">
					<TreeItemContent>
						<Icon name="folders" size="small" /> Photos
					</TreeItemContent>
					<TreeItem id="image1" textValue="Image 1">
						<TreeItemContent>
							<Icon name="folders" size="small" /> Image 1
						</TreeItemContent>
					</TreeItem>
				</TreeItem>
			</Tree>
		);
	},
};

export const WithDisabledItems: Story = {
	args: {
		'aria-label': 'File System with Disabled Items',
		selectionMode: 'multiple',
	},
	render: (args) => (
		<Tree {...args} defaultExpandedKeys={['documents', 'photos']}>
			<TreeItem id="documents" textValue="Documents">
				<TreeItemContent>
					<Icon name="folders" size="small" /> Documents
				</TreeItemContent>
				<TreeItem id="project" textValue="Project" isDisabled>
					<TreeItemContent>
						<Icon name="folders" size="small" /> Project
					</TreeItemContent>
				</TreeItem>
			</TreeItem>
			<TreeItem id="photos" textValue="Photos">
				<TreeItemContent>
					<Icon name="folders" size="small" /> Photos
				</TreeItemContent>
				<TreeItem id="image1" textValue="Image 1" isDisabled>
					<TreeItemContent>
						<Icon name="folders" size="small" /> Image 1
					</TreeItemContent>
				</TreeItem>
			</TreeItem>
		</Tree>
	),
};

export const WithDescriptions: Story = {
	args: {
		'aria-label': 'File System with Descriptions',
	},
	render: (args) => (
		<Tree {...args} defaultExpandedKeys={['documents', 'photos']}>
			<TreeItem id="documents" textValue="Documents">
				<TreeItemContent>
					<div>
						<Text slot="label">
							<Icon name="folders" size="small" /> Documents
						</Text>
						<Text slot="description">Contains project files and reports</Text>
					</div>
				</TreeItemContent>
				<TreeItem id="project" textValue="Project">
					<TreeItemContent>
						<div>
							<Text slot="label">
								<Icon name="folders" size="small" /> Project
							</Text>
							<Text slot="description">Current project workspace</Text>
						</div>
					</TreeItemContent>
				</TreeItem>
			</TreeItem>
			<TreeItem id="photos" textValue="Photos">
				<TreeItemContent>
					<div>
						<Text slot="label">
							<Icon name="folders" size="small" /> Photos
						</Text>
						<Text slot="description">Image assets and screenshots</Text>
					</div>
				</TreeItemContent>
			</TreeItem>
		</Tree>
	),
};
