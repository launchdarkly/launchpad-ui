import figma from '@figma/code-connect';

import { NumberField } from '../src/NumberField';

figma.connect(
	NumberField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10876%3A32982',
	{
		props: {
			defaultValue: figma.boolean('Value?', {
				true: 10,
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ isInvalid, isDisabled, defaultValue }) => (
			<NumberField isInvalid={isInvalid} isDisabled={isDisabled} defaultValue={defaultValue} />
		),
	},
);

figma.connect(
	NumberField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10876%3A32982',
	{
		variant: { 'Label?': 'true' },
		props: {
			label: figma.boolean('Label?', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			defaultValue: figma.boolean('Value?', {
				true: 10,
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ isInvalid, isDisabled, defaultValue, label }) => (
			<>
				{label}
				<NumberField isInvalid={isInvalid} isDisabled={isDisabled} defaultValue={defaultValue} />
			</>
		),
	},
);
