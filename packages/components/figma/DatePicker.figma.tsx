import figma from '@figma/code-connect';

import { DatePicker } from '../src/DatePicker';

figma.connect(
	DatePicker,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10833%3A38082',
	{
		variant: { 'Label?': 'false' },
		props: {
			helpText: figma.boolean('Help text?', {
				true: figma.string('Help text'),
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ isInvalid, isDisabled }) => (
			<DatePicker isInvalid={isInvalid} isDisabled={isDisabled} />
		),
	},
);

figma.connect(
	DatePicker,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10833%3A38082',
	{
		variant: { 'Label?': 'true' },
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
				<DatePicker isInvalid={isInvalid} isDisabled={isDisabled} />
			</>
		),
	},
);
