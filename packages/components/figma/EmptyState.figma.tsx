import type { IconProps } from '@launchpad-ui/icons';

import figma from '@figma/code-connect';
import { BadgeIcon, Icon } from '@launchpad-ui/icons';

import { Button } from '../src/Button';
import { EmptyState } from '../src/EmptyState';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

figma.connect(
	EmptyState,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10559-2269',
	{
		props: {
			hasBorder: figma.boolean('Border?'),
			heading: figma.textContent('Heading'),
			description: figma.textContent('Description'),
			icon: figma.instance('Icon').render<IconProps>(({ name }) => <Icon name={name} />),
			action: figma.string('Button label'),
		},
		example: ({ hasBorder, heading, description, icon, action }) => (
			<EmptyState hasBorder={hasBorder}>
				<BadgeIcon size="large" aria-hidden>
					{icon}
				</BadgeIcon>
				<Heading>{heading}</Heading>
				<Text>{description}</Text>
				<Button variant="primary">{action}</Button>
			</EmptyState>
		),
	},
);
