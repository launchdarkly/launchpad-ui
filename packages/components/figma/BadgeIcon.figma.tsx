import figma from '@figma/code-connect';

import { BadgeIcon } from '../../icons/src/BadgeIcon';

figma.connect(
	BadgeIcon,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A3636',
	{
		props: {
			size: figma.enum('Size', {
				'16 (tiny)': 'tiny',
				'24 (small)': 'small',
				'36 (medium)': 'medium',
				'64 (large)': 'large',
			}),
			color: figma.enum('Color', {
				Gray: 'gray',
				Blue: 'blue',
				Cyan: 'cyan',
				Purple: 'purple',
				Pink: 'pink',
				Orange: 'orange',
				Yellow: 'yellow',
				Green: 'green',
				Gradient1: 'gradient-1',
				Gradient2: 'gradient-2',
				Gradient3: 'gradient-3',
				Gradient4: 'gradient-4',
				Gradient5: 'gradient-5',
			}),
		},
		example: (props) => <BadgeIcon size={props.size} color={props.color} />,
	},
);
