import figma from '@figma/code-connect';

import { LinkIconButton } from '../src/LinkIconButton';

figma.connect(
	LinkIconButton,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A35190',
	{
		example: () => <LinkIconButton icon="download" aria-label="Add label" />,
	},
);
