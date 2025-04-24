import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { IconButton } from '../src/IconButton';
import { Separator } from '../src/Separator';
import { ToggleButtonGroup } from '../src/ToggleButtonGroup';
import { ToggleIconButton } from '../src/ToggleIconButton';
import { Toolbar } from '../src/Toolbar';

const meta: Meta<typeof Toolbar> = {
	component: Toolbar,
	title: 'Components/Content/Toolbar',
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Example: Story = {
	args: {
		children: (
			<>
				<ButtonGroup>
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
				</ButtonGroup>
				<Separator />
				<ButtonGroup>
					<Button variant="primary">Create</Button>
					<IconButton icon="gear" variant="minimal" aria-label="settings" />
					<IconButton icon="help" variant="minimal" aria-label="help" />
				</ButtonGroup>
			</>
		),
	},
};

export const Orientation: Story = {
	args: {
		children: (
			<>
				<IconButton icon="add" aria-label="add" />
				<IconButton icon="edit" aria-label="edit" />
				<IconButton icon="delete" aria-label="delete" />
				<IconButton icon="gear" aria-label="settings" />
				<IconButton icon="help" aria-label="help" />
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
				<IconButton icon="add" aria-label="add" />
				<IconButton icon="edit" aria-label="edit" />
				<IconButton icon="delete" aria-label="delete" />
				<IconButton icon="gear" aria-label="settings" />
				<IconButton icon="help" aria-label="help" />
			</>
		),
		spacing: 'compact',
	},
};

export const Large: Story = {
	args: {
		children: (
			<>
				<IconButton icon="add" variant="minimal" aria-label="add" />
				<IconButton icon="edit" variant="minimal" aria-label="edit" />
				<IconButton icon="delete" variant="minimal" aria-label="delete" />
				<IconButton icon="gear" variant="minimal" aria-label="settings" />
				<IconButton icon="help" variant="minimal" aria-label="help" />
			</>
		),
		spacing: 'large',
	},
};

export const Complex: Story = {
	args: {
		children: (
			<>
				<ButtonGroup spacing="compact">
					<Button>Filter</Button>
					<Button>Sort</Button>
					<Button>Display</Button>
				</ButtonGroup>
				<ButtonGroup spacing="compact">
					<Button>Create</Button>
					<Button>Update</Button>
				</ButtonGroup>
				<ToggleButtonGroup>
					<ToggleIconButton icon="star" aria-label="favorite" />
					<ToggleIconButton icon="notifications" aria-label="notifications" />
				</ToggleButtonGroup>
			</>
		),
		spacing: 'compact',
	},
};
