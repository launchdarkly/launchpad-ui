import figma from '@figma/code-connect';

import { ButtonGroup, RadioGroup } from '../src';

figma.connect(
	RadioGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-33595',
	{
		props: {
			label: figma.boolean('Has label', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			radios: figma.children(['.Radio']),
		},
		example: ({ label, radios }) => (
			<RadioGroup defaultValue="1">
				{label}
				<ButtonGroup role="presentation" spacing="compact">
					{radios}
				</ButtonGroup>
			</RadioGroup>
		),
	},
);
