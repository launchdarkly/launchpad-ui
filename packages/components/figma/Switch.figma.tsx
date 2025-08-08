import figma from '@figma/code-connect';

import { Switch } from '../src/Switch';

figma.connect(
	Switch,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A34050',
	{
		props: {
			isDisabled: figma.enum('State', { Disabled: true }),
			isSelected: figma.boolean('Toggle'),
		},
		example: ({ isSelected, isDisabled }) => (
			<Switch
				isDisabled={isDisabled}
				isSelected={isSelected}
				onChange={(selected) => {
					console.log(selected);
				}}
			/>
		),
	},
);
