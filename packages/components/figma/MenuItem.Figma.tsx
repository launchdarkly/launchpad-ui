import figma from '@figma/code-connect';

import { MenuItem } from '../src/Menu';

figma.connect(
	MenuItem,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-30645',
	{
		props: {
			disabled: figma.enum('State', { Disabled: true }),
			label: figma.instance('Label'),
			icon: figma.boolean('Has icon', {
				true: figma.instance('Icon'),
				false: undefined,
			}),
			shortcut: figma.string('Shortcut'),
		},
		example: ({ disabled, label, shortcut }) => (
			<MenuItem isDisabled={disabled}>
				{label} {shortcut}
			</MenuItem>
		),
	},
);
