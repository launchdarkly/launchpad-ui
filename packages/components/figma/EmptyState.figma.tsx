import figma from '@figma/code-connect';

import { BadgeIcon, Icon } from '@launchpad-ui/icons';

import type { EmptyStateProps } from '../src';
import { Button } from '../src/Button';
import { EmptyState } from '../src/EmptyState';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

figma.connect(
	EmptyState,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=29920-114',
	{
		props: {
			// Figma leaves the variant property unnamed, so it reads as "Property 1", and its largest
			// option is "Default" rather than "Large".
			size: figma.enum<Exclude<EmptyStateProps['size'], null>>('Property 1', {
				Default: 'large',
				Medium: 'medium',
				Small: 'small',
			}),
			heading: figma.textContent('Heading'),
			description: figma.textContent('Description'),
		},
		example: ({ size, heading, description }) => (
			<EmptyState size={size}>
				<BadgeIcon aria-hidden>
					<Icon name="crown" />
				</BadgeIcon>
				<Heading>{heading}</Heading>
				<Text>{description}</Text>
				<Button variant="primary">Create project</Button>
			</EmptyState>
		),
	},
);
