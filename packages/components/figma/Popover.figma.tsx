import figma from '@figma/code-connect';

import { Popover } from '../src/Popover';

figma.connect(
	Popover,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=4431%3A2829',
	{
		props: {},
		example: (props) => <Popover {...props} />,
	},
);
