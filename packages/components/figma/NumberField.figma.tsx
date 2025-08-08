import figma from '@figma/code-connect';

import { NumberField } from '../src/NumberField';

figma.connect(
	NumberField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10876%3A32982',
	{
		props: {
			value: figma.boolean('Value?', {
				true: figma.textContent('Value'),
				false: undefined,
			}),
			placeholder: figma.boolean('Placeholder?', {
				true: figma.textContent('Placeholder'),
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ isInvalid, isDisabled, value, placeholder }) => (
			<NumberField
				placeholder={placeholder}
				isInvalid={isInvalid}
				isDisabled={isDisabled}
				value={value}
			/>
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
			value: figma.boolean('Value?', {
				true: figma.textContent('Value'),
				false: undefined,
			}),
			placeholder: figma.boolean('Placeholder?', {
				true: figma.textContent('Placeholder'),
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ isInvalid, isDisabled, value, placeholder, label }) => (
			<>
				{label}
				<NumberField
					placeholder={placeholder}
					isInvalid={isInvalid}
					isDisabled={isDisabled}
					value={value}
				/>
			</>
		),
	},
);
