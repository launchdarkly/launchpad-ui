import figma from '@figma/code-connect';

import { Label } from '../src/Label';

figma.connect(
	Label,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A34227',
	{
		props: {
			label: figma.textContent('Label'),
			required: figma.boolean('Required?'),
			description: figma.boolean('Description?', {
				true: figma.textContent('Description'),
				false: undefined,
			}),
		},
		example: ({ label }) => <Label>{label}</Label>,
	},
);
