import { describe, expect, it } from 'vitest';

import { BadgeIcon, Icon } from '@launchpad-ui/icons';
import { render, screen } from '@launchpad-ui/test-utils';

import { Button, ButtonGroup, EmptyState, Heading, Text } from '../src';

import badgeIconStyles from '../../icons/src/styles/BadgeIcon.module.css';
import buttonStyles from '../src/styles/Button.module.css';
import emptyStateStyles from '../src/styles/EmptyState.module.css';

describe('EmptyState', () => {
	it('renders heading and description', () => {
		render(
			<EmptyState>
				<BadgeIcon aria-hidden>
					<Icon name="folders" />
				</BadgeIcon>
				<Heading>No projects yet</Heading>
				<Text>Create a project to get started.</Text>
				<Button variant="primary">Create project</Button>
			</EmptyState>,
		);

		expect(screen.getByRole('heading', { name: 'No projects yet' })).toBeVisible();
		expect(screen.getByText('Create a project to get started.')).toBeVisible();
		expect(screen.getByRole('button', { name: 'Create project' })).toBeVisible();
	});

	it('renders with a border when hasBorder is true', () => {
		const { container } = render(
			<EmptyState hasBorder>
				<Heading>No results</Heading>
				<Text>Try another search.</Text>
			</EmptyState>,
		);

		expect(container.firstChild).toHaveClass(/bordered/);
	});

	it('applies action layout to a single button but not to buttons inside a ButtonGroup', () => {
		render(
			<EmptyState>
				<Heading>No projects yet</Heading>
				<Text>Create a project to get started.</Text>
				<ButtonGroup>
					<Button variant="primary">Create project</Button>
					<Button variant="minimal">Learn more</Button>
				</ButtonGroup>
			</EmptyState>,
		);

		const group = screen.getByRole('group');
		const buttons = screen.getAllByRole('button');

		expect(group).toHaveClass(emptyStateStyles.actions);
		for (const button of buttons) {
			expect(button).not.toHaveClass(emptyStateStyles.actions);
		}

		const { container: singleButtonContainer } = render(
			<EmptyState>
				<Heading>No projects yet</Heading>
				<Text>Create a project to get started.</Text>
				<Button variant="primary">Create project</Button>
			</EmptyState>,
		);

		const singleButton = singleButtonContainer.querySelector('button');
		expect(singleButton?.parentElement).toHaveClass(emptyStateStyles.base);
	});

	it.each([
		['large', emptyStateStyles.large, badgeIconStyles.large, buttonStyles.large],
		['medium', emptyStateStyles.medium, badgeIconStyles.medium, buttonStyles.medium],
		['small', emptyStateStyles.small, badgeIconStyles.small, buttonStyles.small],
	] as const)('scales the badge icon and button to match size %s', (size, rootClass, badgeClass, buttonClass) => {
		const { container } = render(
			<EmptyState size={size}>
				<BadgeIcon aria-hidden data-test-id="badge">
					<Icon name="folders" />
				</BadgeIcon>
				<Heading>No projects yet</Heading>
				<Text>Create a project to get started.</Text>
				<Button variant="primary">Create project</Button>
			</EmptyState>,
		);

		expect(container.firstChild).toHaveClass(rootClass);
		expect(screen.getByTestId('badge')).toHaveClass(badgeClass);
		expect(screen.getByRole('button', { name: 'Create project' })).toHaveClass(buttonClass);
	});

	it('lets EmptyState override a size set directly on the badge icon', () => {
		render(
			<EmptyState size="small">
				<BadgeIcon size="large" aria-hidden data-test-id="badge">
					<Icon name="folders" />
				</BadgeIcon>
				<Heading>No projects yet</Heading>
				<Text>Create a project to get started.</Text>
			</EmptyState>,
		);

		expect(screen.getByTestId('badge')).toHaveClass(badgeIconStyles.small);
		expect(screen.getByTestId('badge')).not.toHaveClass(badgeIconStyles.large);
	});
});
