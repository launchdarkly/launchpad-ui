import figma from '@figma/code-connect';

import { FieldError } from '../src/FieldError';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { TextField } from '../src/TextField';

figma.connect(
	TextField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34232',
	{
		props: {
			hasValue: figma.boolean('Value?'),
			hasHelpText: figma.boolean('Help text?'),
			multiline: figma.boolean('Multi Line'),
			variant: figma.boolean('Minimal', {
				true: 'minimal',
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			label: figma.boolean('Label?', {
				true: 'Label',
				false: undefined,
			}),
			placeholder: figma.boolean('Placeholder?', {
				true: figma.textContent('Placeholder'),
				false: undefined,
			}),
			value: figma.textContent('Value'),
			isDisabled: figma.enum('State', { Disabled: true }),
			validationMessage: figma.textContent('Validation message'),
		},
		example: ({ label, variant, placeholder, value, isDisabled, isInvalid, validationMessage }) => {
			return (
				<TextField isDisabled={isDisabled} isInvalid={isInvalid}>
					<Label>{label}</Label>
					<Input variant={variant} placeholder={placeholder} value={value} />
					<FieldError>{validationMessage}</FieldError>
				</TextField>
			);
		},
	},
);
