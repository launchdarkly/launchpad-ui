import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

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
					<Button variant="minimal">
						<Icon name="filter-list" size="small" /> Filter{' '}
						<Icon name="chevron-down" size="small" />
					</Button>
					<Button variant="minimal">
						<Icon name="sort" size="small" /> Sort <Icon name="chevron-down" size="small" />
					</Button>
					<Button variant="minimal">
						<Icon name="filter-tune" size="small" /> Display{' '}
						<Icon name="chevron-down" size="small" />
					</Button>
				</Group>
				<Separator orientation="vertical" />
				<Group>
					<Button variant="primary">Create</Button>
					<IconButton icon="gear" variant="minimal" aria-label="settings" />
					<IconButton icon="help" variant="minimal" aria-label="help" />
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
					<IconButton icon="gear" aria-label="settings" />
					<IconButton icon="help" aria-label="help" />
				</Group>
			</>
		),
		orientation: 'vertical',
		spacing: 'compact',
	},
};

export const Compact: Story = {
	args: {
		children: (
			<>
				<Group>
					<IconButton icon="add" aria-label="add" />
					<IconButton icon="edit" aria-label="edit" />
					<IconButton icon="delete" aria-label="delete" />
					<IconButton icon="gear" aria-label="settings" />
					<IconButton icon="help" aria-label="help" />
				</Group>
			</>
		),
		spacing: 'compact',
	},
};

export const Large: Story = {
	args: {
		children: (
			<>
				<Group>
					<IconButton icon="add" variant="minimal" aria-label="add" />
					<IconButton icon="edit" variant="minimal" aria-label="edit" />
					<IconButton icon="delete" variant="minimal" aria-label="delete" />
					<IconButton icon="gear" variant="minimal" aria-label="settings" />
					<IconButton icon="help" variant="minimal" aria-label="help" />
				</Group>
			</>
		),
		spacing: 'large',
	},
};
