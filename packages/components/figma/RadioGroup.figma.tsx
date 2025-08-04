import figma from '@figma/code-connect';

import { ButtonGroup, Label, RadioButton, RadioGroup } from '../src';

figma.connect(
	RadioGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-37500',
	{
		example: () => (
			<RadioGroup defaultValue="1">
				<Label>RadioButton</Label>
				<ButtonGroup role="presentation" spacing="compact">
					<RadioButton value="1">First</RadioButton>
					<RadioButton value="2">Second</RadioButton>
					<RadioButton value="3">Third</RadioButton>
					<RadioButton value="4">Fourth</RadioButton>
					<RadioButton value="5">Fifth</RadioButton>
				</ButtonGroup>
			</RadioGroup>
		),
	},
);
