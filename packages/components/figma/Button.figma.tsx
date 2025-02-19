// @ts-nocheck

import figma from '@figma/code-connect';

import { Button } from '../src';

figma.connect(
	Button,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/LaunchPad?node-id=1-27006',
	{
		props: {
			//hasIconLeft: figma.boolean('Has icon left'),
			//leftIcon: figma.instance('Left icon'),
			//hasIconRight: figma.boolean('Has icon right'),
			//rightIcon: figma.instance('Right icon'),
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
		},
		example: ({ label, variant, size }) => (
			<Button variant={variant} size={size}>
				{label}
			</Button>
		),
	},
);
