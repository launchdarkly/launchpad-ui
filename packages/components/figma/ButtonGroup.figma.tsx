import figma from '@figma/code-connect';

import { Button, ButtonGroup } from '../src';

figma.connect(
	ButtonGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-28639',
	{
		props: {
			spacing: figma.enum('Type', {
				Basic: 'basic',
				Compact: 'compact',
				Large: 'large',
			}),
		},
		example: ({ spacing }) => (
			<ButtonGroup spacing={spacing}>
				<Button>First</Button>
				<Button variant="primary">Second</Button>
			</ButtonGroup>
		),
	},
);
