// @ts-nocheck

import figma from '@figma/code-connect';

import { Button } from '../src';

figma.connect(
	Button,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/LaunchPad?node-id=1-27006',
	{
		props: {
			hasIconLeft: figma.boolean('Has icon left', {
				true: figma.instance('Left icon'),
				false: undefined,
			}),
			hasIconRight: figma.boolean('Has icon right', {
				true: figma.instance('Right icon'),
				false: undefined,
			}),
			label: figma.string('Label'),
			variant: figma.enum('Variant', {
				Primary: 'primary',
				Default: 'default',
				Minimal: 'minimal',
				Destructive: 'destructive',
			}),
			size: figma.enum('Size', {
				Medium: 'medium',
				Small: 'small',
				Large: 'large',
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
			isFocusVisible: figma.enum('State', { ':focus-visible': true }),
			isHovered: figma.enum('State', { ':hover': true }),
			isPressed: figma.enum('State', { ':active': true }),
		},
		example: ({
			hasIconLeft,
			hasIconRight,
			label,
			variant,
			size,
			isDisabled,
			isFocusVisible,
			isHovered,
			isPressed,
		}) => (
			<Button
				variant={variant}
				size={size}
				isDisabled={isDisabled}
				isFocusVisible={isFocusVisible}
				isHovered={isHovered}
				isPressed={isPressed}
			>
				{hasIconLeft}
				{label}
				{hasIconRight}
			</Button>
		),
	},
);
