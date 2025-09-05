import figma from '@figma/code-connect';

import { Avatar } from '../src/Avatar';

// Avatar with image
figma.connect(
	Avatar,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A43538',
	{
		variant: { Kind: 'Image' },
		props: {
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
		},
		example: (props) => (
			<Avatar size={props.size} src="https://via.placeholder.com/150" alt="User avatar" />
		),
	},
);

// Avatar with initials
figma.connect(
	Avatar,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A43538',
	{
		variant: { Kind: 'Initials' },
		props: {
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
		},
		example: (props) => <Avatar size={props.size}>JD</Avatar>,
	},
);

// Avatar with icon (default)
figma.connect(
	Avatar,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A43538',
	{
		variant: { Kind: 'Icon' },
		props: {
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
		},
		example: (props) => <Avatar size={props.size} />,
	},
);
