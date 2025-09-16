import figma from '@figma/code-connect';

import { ToggleIconButton } from '../src/ToggleIconButton';

figma.connect(
	ToggleIconButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A29731',
	{
		props: {
			isSelected: figma.boolean('Selected'),
			isDisabled: figma.enum('State', { Disabled: true }),
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
			}),
			iconProps: figma.instance('Icon').getProps(),
		},
		example: ({ isDisabled, isSelected, iconProps, size }) => (
			<ToggleIconButton
				isDisabled={isDisabled}
				isSelected={isSelected}
				icon={iconProps.name}
				aria-label="Accessible label text"
				size={size}
			/>
		),
	},
);
