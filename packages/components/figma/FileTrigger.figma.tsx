import figma from '@figma/code-connect';

import { Button } from '../src/Button';
import { FileTrigger } from '../src/FileTrigger';

figma.connect(
	FileTrigger,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=14350-114160&m=dev',
	{
		example: () => (
			<FileTrigger>
				<Button>Select a file</Button>
			</FileTrigger>
		),
	},
);
