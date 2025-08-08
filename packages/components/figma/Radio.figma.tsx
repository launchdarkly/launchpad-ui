import figma from '@figma/code-connect';

import { Radio } from '../src/Radio';

figma.connect(
	Radio,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-33572',
	{
		props: {
			// selected state controlled by the parent RadioGroup
			isSelected: figma.boolean('Selected'),
			isDisabled: figma.enum('State', { Disabled: true }),
			isInvalid: figma.enum('State', { Invalid: true }),
		},
		example: ({ isDisabled }) => <Radio value="<your-value>" isDisabled={isDisabled} />,
	},
);

figma.connect(
	Radio,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-33572',
	{
		variant: { 'Has label': 'true' },
		props: {
			// selected state controlled by the parent RadioGroup
			isSelected: figma.boolean('Selected'),
			isDisabled: figma.enum('State', { Disabled: true }),
			isInvalid: figma.enum('State', { Invalid: true }),
			label: figma.boolean('Has label', {
				true: figma.children(['Label']),
				false: undefined,
			}),
		},
		example: ({ isDisabled, label }) => (
			<>
				{label}
				<Radio value="<your-value>" isDisabled={isDisabled} />
			</>
		),
	},
);
