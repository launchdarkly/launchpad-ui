import figma from '@figma/code-connect';

import { Menu } from '../src/Menu';

figma.connect(
	Menu,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-30645',
	{
		props: {
			children: figma.children(['MenuItem']),
		},
		example: ({ children }) => <Menu>{children}</Menu>,
	},
);
