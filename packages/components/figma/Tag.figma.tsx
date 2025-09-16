import figma from '@figma/code-connect';

import { Tag } from '../src';

figma.connect(
	Tag,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-31713',
	{
		props: {
			icon: figma.boolean('Icon?', {
				true: figma.instance('Icon'),
				false: undefined,
			}),
			label: figma.textContent('Label'),
			removable: figma.boolean('Removable?'),
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
			variant: figma.enum('Variant', {
				Default: 'default',
				Destructive: 'error',
				Success: 'success',
				Error: 'error',
				Beta: 'beta',
				New: 'new',
				Info: 'info',
				Warning: 'warning',
				Federal: 'federal',
			}),
		},
		example: ({ icon, label, size, isDisabled, variant }) => (
			<Tag size={size} isDisabled={isDisabled} variant={variant}>
				{icon}
				{label}
			</Tag>
		),
	},
);
