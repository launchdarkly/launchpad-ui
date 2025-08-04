import figma from '@figma/code-connect';

import { ToggleIconButton } from '../src/ToggleIconButton';

figma.connect(
	ToggleIconButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A29731',
	{
		props: {
			isSelected: figma.boolean('Selected'),
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
			}),
		},
		example: (props) => (
			<ToggleIconButton
				isSelected={props.isSelected}
				icon="arrow-up-right"
				aria-label="Open documentation"
				size={props.size}
			/>
		),
	},
);
