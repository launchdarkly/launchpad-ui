import type { IconButtonProps } from '../src';

import figma from '@figma/code-connect';

import { IconButton } from '../src';

figma.connect(
	IconButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/LaunchPad?node-id=1-28835',
	{
		props: {
			icon: figma.instance('Icon').getProps(),
			variant: figma.enum<IconButtonProps['variant']>('Type', {
				Primary: 'primary',
				Default: 'default',
				Minimal: 'minimal',
				Destructive: 'destructive',
			}),
			size: figma.enum<Exclude<IconButtonProps['size'], null>>('Size', {
				Small: 'small',
				Medium: 'medium',
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
			isFocusVisible: figma.enum('State', { 'Focus visible': true }),
			isHovered: figma.enum('State', { Hover: true }),
			isPressed: figma.enum('State', { Active: true }),
		},
		example: ({ icon, variant, size, isDisabled }) => (
			<IconButton
				aria-label="label"
				icon={icon.name}
				variant={variant}
				size={size}
				isDisabled={isDisabled}
			/>
		),
	},
);
