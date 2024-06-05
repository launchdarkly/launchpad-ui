import type { Meta, StoryObj } from '@storybook/react';

import { Button, Group, IconButton, Separator, Toolbar } from '../src';

const meta: Meta<typeof Toolbar> = {
	component: Toolbar,
	title: 'Components/Content/Toolbar',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Group>
					<Button size="small">Cut</Button>
					<Button size="small">Copy</Button>
					<Button size="small">Paste</Button>
				</Group>
				<Separator orientation="vertical" />
				<Group>
					<IconButton icon="gear" aria-label="settings" size="small" />
					<IconButton icon="help" aria-label="help" size="small" />
				</Group>
			</>
		),
	},
};

export const Orientation: Story = {
	args: {
		children: (
			<>
				<Group>
					<IconButton icon="add" aria-label="add" />
					<IconButton icon="edit" aria-label="edit" />
					<IconButton icon="delete" aria-label="delete" />
				</Group>
				<Separator />
				<Group>
					<IconButton icon="gear" aria-label="settings" />
					<IconButton icon="help" aria-label="help" />
				</Group>
			</>
		),
		orientation: 'vertical',
	},
};
