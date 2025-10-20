import figma from '@figma/code-connect';

import { ProgressBar } from '../src/ProgressBar';

figma.connect(
	ProgressBar,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A37274',
	{
		props: {
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
		},
		example: ({ size }) => <ProgressBar size={size} />,
	},
);
