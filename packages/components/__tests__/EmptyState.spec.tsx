import { BadgeIcon, Icon } from '@launchpad-ui/icons';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Button, EmptyState, EmptyStateIllustration, Heading, Text } from '../src';

describe('EmptyState', () => {
	it('renders heading and description', () => {
		render(
			<EmptyState>
				<EmptyStateIllustration aria-hidden>
					<BadgeIcon size="large">
						<Icon name="folders" />
					</BadgeIcon>
				</EmptyStateIllustration>
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
});
