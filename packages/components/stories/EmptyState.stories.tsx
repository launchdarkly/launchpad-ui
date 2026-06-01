import type { Meta, StoryObj } from '@storybook/react-vite';

import { BadgeIcon, Icon } from '@launchpad-ui/icons';

import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { EmptyState, EmptyStateIllustration } from '../src/EmptyState';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

const meta: Meta<typeof EmptyState> = {
	component: EmptyState,
	title: 'Components/Content/EmptyState',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10559-2269&m=dev',
		},
		docs: {
			description: {
				component: `
An empty state displays an illustration and a message, usually when there is no content to show.

Follows the [React Spectrum IllustratedMessage](https://react-spectrum.adobe.com/v3/IllustratedMessage.html) composition pattern.
				`,
			},
		},
	},
	argTypes: {
		hasBorder: {
			control: 'boolean',
		},
		size: {
			control: 'inline-radio',
			options: ['large'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
	render: () => (
		<EmptyState>
			<EmptyStateIllustration aria-hidden>
				<BadgeIcon size="large">
					<Icon name="crown" />
				</BadgeIcon>
			</EmptyStateIllustration>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

export const Bordered: Story = {
	render: () => (
		<EmptyState hasBorder>
			<EmptyStateIllustration aria-hidden>
				<BadgeIcon size="large">
					<Icon name="crown" />
				</BadgeIcon>
			</EmptyStateIllustration>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

export const WithSecondaryAction: Story = {
	render: () => (
		<EmptyState>
			<EmptyStateIllustration aria-hidden>
				<BadgeIcon size="large">
					<Icon name="crown" />
				</BadgeIcon>
			</EmptyStateIllustration>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<ButtonGroup>
				<Button variant="primary">Create project</Button>
				<Button variant="minimal">Learn more</Button>
			</ButtonGroup>
		</EmptyState>
	),
};
