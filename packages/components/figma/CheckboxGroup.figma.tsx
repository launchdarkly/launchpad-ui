import figma from '@figma/code-connect';

import { CheckboxGroup } from '../src/CheckboxGroup';

figma.connect(
	CheckboxGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A33127',
	{
		props: {
			validationMessage: figma.string('Validation message'),
			description: figma.boolean('Description?', {
				true: figma.string('Description'),
				false: undefined,
			}),
			label: figma.boolean('Has label?', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			direction: figma.enum('Direction', {
				Vertical: 'vertical',
				Horizontal: 'horizontal',
			}),
			children: figma.children(['Checkbox']),
		},
		example: (props) => (
			<>
				{props.label}
				<CheckboxGroup>{props.children}</CheckboxGroup>
			</>
		),
	},
);
