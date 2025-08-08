import type { ToggleButtonProps } from '../src';

import figma from '@figma/code-connect';

import { ToggleButton } from '../src';

figma.connect(
	ToggleButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-29278',
	{
		props: {
			children: figma.string('Label'),
			isDisabled: figma.enum('State', { Disabled: true }),

			size: figma.enum<Exclude<ToggleButtonProps['size'], null>>('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
		},
		example: ({ children, size }) => <ToggleButton size={size}>{children}</ToggleButton>,
	},
);

figma.connect(
	ToggleButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-29278',
	{
		variant: { 'Has icon left': 'true' },
		props: {
			children: figma.string('Label'),
			isDisabled: figma.enum('State', { Disabled: true }),
			size: figma.enum<Exclude<ToggleButtonProps['size'], null>>('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
			icon: figma.boolean('Has icon left', {
				true: figma.instance('Left icon'),
				false: undefined,
			}),
		},
		example: ({ children, size, icon }) => (
			<ToggleButton size={size}>
				{icon} {children}
			</ToggleButton>
		),
	},
);

figma.connect(
	ToggleButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-29278',
	{
		variant: { 'Has icon right': 'true' },
		props: {
			children: figma.string('Label'),
			isDisabled: figma.enum('State', { Disabled: true }),

			size: figma.enum<Exclude<ToggleButtonProps['size'], null>>('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
			icon: figma.boolean('Has icon right', {
				true: figma.instance('Right icon'),
				false: undefined,
			}),
		},
		example: ({ children, size, icon }) => (
			<ToggleButton size={size}>
				{children} {icon}
			</ToggleButton>
		),
	},
);
