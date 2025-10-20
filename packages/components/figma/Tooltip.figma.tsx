import figma from '@figma/code-connect';

import { Button } from '../src/Button';
import { Tooltip, TooltipTrigger } from '../src/Tooltip';

figma.connect(
	Tooltip,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-37251',
	{
		props: {
			message: figma.string('Message'),
			icon: figma.boolean('Has icon', {
				true: 'info',
				false: 'none',
			}),
		},
		example: ({ message }) => (
			<TooltipTrigger>
				<Button>Example Trigger</Button>
				<Tooltip>{message}</Tooltip>
			</TooltipTrigger>
		),
	},
);

figma.connect(
	Tooltip,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-37251',
	{
		variant: { 'Has icon': 'true' },
		props: {
			message: figma.string('Message'),
			icon: figma.boolean('Has icon', {
				true: figma.instance('Icon'),
				false: undefined,
			}),
		},
		example: ({ message, icon }) => (
			<TooltipTrigger>
				<Button>Example Trigger</Button>
				<Tooltip>
					{icon} {message}
				</Tooltip>
			</TooltipTrigger>
		),
	},
);
