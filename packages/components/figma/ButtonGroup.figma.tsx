import figma from '@figma/code-connect';

import { ButtonGroup } from '../src';

figma.connect(
	ButtonGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-28639',
	{
		props: {
			children: figma.children(['Button']),
			spacing: figma.enum('Type', {
				Basic: 'basic',
				Compact: 'compact',
				Large: 'large',
			}),
		},
		example: ({ spacing, children }) => <ButtonGroup spacing={spacing}>{children}</ButtonGroup>,
	},
);
