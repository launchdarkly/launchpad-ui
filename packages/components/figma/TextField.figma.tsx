import figma from '@figma/code-connect';

import { FieldError } from '../src/FieldError';
import { Input } from '../src/Input';
import { TextArea } from '../src/TextArea';
import { TextField } from '../src/TextField';

figma.connect(
	TextField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34232',
	{
		variant: { 'Multi Line': 'false' },
		props: {
			children: figma.boolean('Label?', {
				true: figma.children(['Label', 'Input']),
				false: undefined,
			}),
			value: figma.boolean('Value?', {
				true: figma.textContent('Value'),
				false: undefined,
			}),
			multiline: figma.boolean('Multi Line'),
			variant: figma.boolean('Minimal', {
				true: 'minimal',
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			placeholder: figma.boolean('Placeholder?', {
				true: figma.textContent('Placeholder'),
				false: undefined,
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
			validationMessage: figma.textContent('Validation message'),
		},
		example: ({ children, variant, placeholder, value, isDisabled }) => {
			return (
				<TextField isDisabled={isDisabled}>
					{children}
					<Input variant={variant} placeholder={placeholder} value={value} />
				</TextField>
			);
		},
	},
);

figma.connect(
	TextField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34232',
	{
		variant: { 'Multi Line': 'false', State: 'Invalid' },
		props: {
			children: figma.boolean('Label?', {
				true: figma.children(['Label', 'Input']),
				false: undefined,
			}),
			variant: figma.boolean('Minimal', {
				true: 'minimal',
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			placeholder: figma.boolean('Placeholder?', {
				true: figma.textContent('Placeholder'),
				false: undefined,
			}),
			value: figma.boolean('Value?', {
				true: figma.textContent('Value'),
				false: undefined,
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
			validationMessage: figma.textContent('Validation message'),
		},
		example: ({
			children,
			variant,
			placeholder,
			value,
			isDisabled,
			isInvalid,
			validationMessage,
		}) => {
			return (
				<TextField isDisabled={isDisabled} isInvalid={isInvalid}>
					{children}
					<Input variant={variant} placeholder={placeholder} value={value} />
					<FieldError>{validationMessage}</FieldError>
				</TextField>
			);
		},
	},
);

figma.connect(
	TextField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34232',
	{
		variant: { 'Multi Line': 'true' },
		props: {
			children: figma.boolean('Label?', {
				true: figma.children(['Label', 'Input']),
				false: undefined,
			}),
			placeholder: figma.boolean('Placeholder?', {
				true: figma.textContent('Placeholder'),
				false: undefined,
			}),
			value: figma.boolean('Value?', {
				true: figma.textContent('Value'),
				false: undefined,
			}),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ children, placeholder, value, isDisabled }) => {
			return (
				<TextField isDisabled={isDisabled}>
					{children}
					<TextArea placeholder={placeholder} value={value} />
				</TextField>
			);
		},
	},
);

figma.connect(
	TextField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34232',
	{
		variant: { 'Multi Line': 'true', State: 'Invalid' },
		props: {
			isInvalid: figma.enum('State', { Invalid: true }),
			children: figma.boolean('Label?', {
				true: figma.children(['Label', 'Input']),
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
		example: ({ children, placeholder, value, isDisabled, isInvalid, validationMessage }) => {
			return (
				<TextField isDisabled={isDisabled} isInvalid={isInvalid}>
					{children}
					<TextArea placeholder={placeholder} value={value} />
					<FieldError>{validationMessage}</FieldError>
				</TextField>
			);
		},
	},
);
