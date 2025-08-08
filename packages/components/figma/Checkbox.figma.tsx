import figma from '@figma/code-connect';

import { Checkbox } from '../src/Checkbox';

figma.connect(
	Checkbox,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A32735',
	{
		props: {
			isIndeterminate: figma.enum('Check', {
				Indeterminate: true,
			}),
			label: figma.boolean('Has label', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ label, isIndeterminate, isInvalid, isDisabled }) => (
			<Checkbox isIndeterminate={isIndeterminate} isInvalid={isInvalid} isDisabled={isDisabled}>
				{label}
			</Checkbox>
		),
	},
);
