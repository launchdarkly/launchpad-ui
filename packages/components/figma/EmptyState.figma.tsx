import figma from '@figma/code-connect';

import type { IconProps } from '@launchpad-ui/icons';
import { BadgeIcon, Icon } from '@launchpad-ui/icons';

import type { EmptyStateProps } from '../src';
import { Button } from '../src/Button';
import { EmptyState } from '../src/EmptyState';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

figma.connect(
	EmptyState,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=29527-96176',
	{
		props: {
			size: figma.enum<Exclude<EmptyStateProps['size'], null>>('Size', {
				Large: 'large',
				Medium: 'medium',
				Small: 'small',
			}),
			hasBorder: figma.boolean('Border?'),
			heading: figma.textContent('Heading'),
			description: figma.textContent('Description'),
			icon: figma.instance('Icon').render<IconProps>(({ name }) => <Icon name={name} />),
			action: figma.string('Button label'),
		},
		example: ({ size, hasBorder, heading, description, icon, action }) => (
			<EmptyState size={size} hasBorder={hasBorder}>
				<BadgeIcon aria-hidden>{icon}</BadgeIcon>
				<Heading>{heading}</Heading>
				<Text>{description}</Text>
				<Button variant="primary">{action}</Button>
			</EmptyState>
		),
	},
);
