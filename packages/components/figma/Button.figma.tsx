import type { IconProps } from '@launchpad-ui/icons';
import type { ButtonProps } from '../src';

import figma from '@figma/code-connect';
import { Icon } from '@launchpad-ui/icons';

import { Button } from '../src';

figma.connect(
	Button,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/LaunchPad?node-id=1-27006',
	{
		props: {
			hasIconLeft: figma.boolean('Has icon left', {
				true: figma
					.instance('Left icon')
					.render<IconProps>(({ name }) => <Icon name={name} size="small" />),
				false: undefined,
			}),
			hasIconRight: figma.boolean('Has icon right', {
				true: figma
					.instance('Right icon')
					.render<IconProps>(({ name }) => <Icon name={name} size="small" />),
				false: undefined,
			}),
			label: figma.string('Label'),
			variant: figma.enum<ButtonProps['variant']>('Variant', {
				Primary: 'primary',
				Default: 'default',
				Minimal: 'minimal',
				Destructive: 'destructive',
			}),
			size: figma.enum<ButtonProps['size']>('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
			isFocusVisible: figma.enum('State', { ':focus-visible': true }),
			isHovered: figma.enum('State', { ':hover': true }),
			isPressed: figma.enum('State', { ':active': true }),
		},
		example: ({ hasIconLeft, hasIconRight, label, variant, size, isDisabled }) => (
			<Button variant={variant} size={size} isDisabled={isDisabled}>
				{hasIconLeft}
				{label}
				{hasIconRight}
			</Button>
		),
	},
);
