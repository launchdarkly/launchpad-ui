import type { Meta, StoryObj } from '@storybook/react-vite';
import type { FileDropItem } from 'react-aria';

import { useState } from 'react';

import { Button } from '../src/Button';
import { DropZone } from '../src/DropZone';
import { FileTrigger } from '../src/FileTrigger';
import { Text } from '../src/Text';

const meta: Meta<typeof DropZone> = {
	component: DropZone,
	title: 'Components/Drag and drop/DropZone',
};

export default meta;

type Story = StoryObj<typeof DropZone>;

export const Example: Story = {
	render: (args) => {
		const [dropped, setDropped] = useState(false);

		return (
			<DropZone
				onDrop={() => {
					setDropped(true);
				}}
				{...args}
			>
				<Text slot="label">{dropped ? 'You dropped something' : 'Drop object here'}</Text>
			</DropZone>
		);
	},
};

export const WithFileTrigger: Story = {
	render: (args) => {
		const [files, setFiles] = useState<string | null>(null);

		return (
			<DropZone
				onDrop={(e) => {
					const files = e.items.filter((file) => file.kind === 'file') as FileDropItem[];
					const filenames = files.map((file) => file.name);
					setFiles(filenames.join(', '));
				}}
				{...args}
			>
				<FileTrigger
					allowsMultiple
					onSelect={(e) => {
						if (e) {
							const files = Array.from(e);
							const filenames = files.map((file) => file.name);
							setFiles(filenames.join(', '));
						}
					}}
				>
					<Button>Select files</Button>
				</FileTrigger>
				<Text slot="label" style={{ display: 'block' }}>
					{files || 'Drop files here'}
				</Text>
			</DropZone>
		);
	},
	name: 'FileTrigger',
};
