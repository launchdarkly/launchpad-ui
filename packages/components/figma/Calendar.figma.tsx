import figma from '@figma/code-connect';

import { Calendar } from '../src/Calendar';

figma.connect(
	Calendar,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10675%3A815',
	{
		props: {
			buttons: figma.children(['Button']),
		},
		example: () => <Calendar />,
	},
);
