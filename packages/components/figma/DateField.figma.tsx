import figma from '@figma/code-connect';

import { DateField } from '../src/DateField';

figma.connect(
	DateField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10726%3A60155',
	{
		props: {
			label: figma.boolean('Label?', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			helpText: figma.boolean('Help text?', {
				true: figma.string('Help text'),
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ label, isInvalid, isDisabled }) => (
			<>
				{label}
				<DateField isInvalid={isInvalid} isDisabled={isDisabled} />
			</>
		),
	},
);
