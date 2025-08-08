import figma from '@figma/code-connect';

import { FileTrigger } from '../src/FileTrigger';

figma.connect(
	FileTrigger,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-28805',
	{
		props: {
			children: figma.children(['Button']),
		},
		example: ({ children }) => <FileTrigger>{children}</FileTrigger>,
	},
);
