import figma from '@figma/code-connect';

import { Code } from '../src';

figma.connect(
	Code,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=2308-667',
	{
		props: {
			children: figma.string('Inline text'),
		},
		example: ({ children }) => <Code>{children}</Code>,
	},
);
