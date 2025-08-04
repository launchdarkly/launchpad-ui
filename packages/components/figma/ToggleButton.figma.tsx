import type { ToggleButtonProps } from '../src';

import figma from '@figma/code-connect';

import { ToggleButton } from '../src';

figma.connect(
	ToggleButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-29278',
	{
		props: {
			children: figma.string('Label'),
			size: figma.enum<Exclude<ToggleButtonProps['size'], null>>('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
		},
		example: ({ children, size }) => <ToggleButton size={size}>{children}</ToggleButton>,
	},
);
