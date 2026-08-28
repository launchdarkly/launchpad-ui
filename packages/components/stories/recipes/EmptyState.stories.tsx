import type { Meta, StoryObj } from '@storybook/react-vite';

import { BadgeIcon, Icon } from '@launchpad-ui/icons';

import { Button } from '../../src/Button';
import { ButtonGroup } from '../../src/ButtonGroup';
import { EmptyState } from '../../src/EmptyState';
import { Heading } from '../../src/Heading';
import { Text } from '../../src/Text';

import './EmptyState.stories.css';

const meta: Meta<typeof EmptyState> = {
	component: EmptyState,
	title: 'Recipes/EmptyState',
	decorators: [
		(Story) => (
			<div className="lp-empty-state-docs-embed">
				<Story />
			</div>
		),
	],
	parameters: {
		figma: {
			design: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=29527-96176&m=dev',
		},
		docs: {
			description: {
				component: `
An empty state displays an illustration and a message, usually when there is no content to show.

Follows the [React Spectrum IllustratedMessage](https://react-spectrum.adobe.com/v3/IllustratedMessage.html) composition pattern.

An empty state should have a \`BadgeIcon\`, a short heading with no ending punctuation, a description
that highlights the value of the feature, and a button that creates the object — or, when it can't be
created in the UI, links to the setup documentation.

\`EmptyState\` scales its \`BadgeIcon\`, heading, description, and buttons together, so set \`size\` on
\`EmptyState\` rather than on the children.
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
			options: ['large', 'medium', 'small'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
	render: () => (
		<EmptyState>
			<BadgeIcon aria-hidden>
				<Icon name="crown" />
			</BadgeIcon>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

/**
 * Use `large` for full-page and main-content empty states. It is the default size and the only one
 * with padding of its own.
 */
export const Large: Story = {
	render: () => (
		<EmptyState size="large" hasBorder>
			<BadgeIcon aria-hidden>
				<Icon name="crown" />
			</BadgeIcon>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

/**
 * Use `medium` inside cards, panels, and table bodies, where `large` would dominate the layout.
 * Medium and small carry no padding, so the surrounding container sets it.
 */
export const Medium: Story = {
	render: () => (
		<EmptyState size="medium" hasBorder className="lp-empty-state-docs-inset">
			<BadgeIcon aria-hidden>
				<Icon name="crown" />
			</BadgeIcon>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

/**
 * Use `small` in dense containers where `medium` still crowds the layout.
 */
export const Small: Story = {
	render: () => (
		<EmptyState size="small" hasBorder className="lp-empty-state-docs-inset">
			<BadgeIcon aria-hidden>
				<Icon name="crown" />
			</BadgeIcon>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

export const Bordered: Story = {
	render: () => (
		<EmptyState hasBorder>
			<BadgeIcon aria-hidden>
				<Icon name="crown" />
			</BadgeIcon>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<Button variant="primary">Create project</Button>
		</EmptyState>
	),
};

export const WithSecondaryAction: Story = {
	render: () => (
		<EmptyState>
			<BadgeIcon aria-hidden>
				<Icon name="crown" />
			</BadgeIcon>
			<Heading>No projects yet</Heading>
			<Text>Create a project to get started.</Text>
			<ButtonGroup>
				<Button variant="primary">Create project</Button>
				<Button variant="minimal">Learn more</Button>
			</ButtonGroup>
		</EmptyState>
	),
};
