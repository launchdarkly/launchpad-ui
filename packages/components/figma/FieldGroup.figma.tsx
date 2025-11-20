import figma from '@figma/code-connect';

import { FieldGroup } from '../src/FieldGroup';

figma.connect(
	FieldGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A33319',
	{
		props: {
			variant: figma.enum('Variant', {
				Default: 'default',
				Custom: 'custom',
			}),
			children: figma.children(['TextField', 'Label']),
			legend: figma.boolean('Legend?', {
				true: figma.string('Legend'),
				false: undefined,
			}),
		},
		example: ({ children, legend }) => <FieldGroup name={legend}>{children}</FieldGroup>,
	},
);
