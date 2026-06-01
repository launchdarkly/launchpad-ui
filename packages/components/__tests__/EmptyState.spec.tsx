import { BadgeIcon, Icon } from '@launchpad-ui/icons';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Button, ButtonGroup, EmptyState, Heading, Text } from '../src';
import emptyStateStyles from '../src/styles/EmptyState.module.css';

describe('EmptyState', () => {
	it('renders heading and description', () => {
		render(
			<EmptyState>
				<BadgeIcon size="large" aria-hidden>
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
});
