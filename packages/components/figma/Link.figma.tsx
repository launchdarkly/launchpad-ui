import figma from '@figma/code-connect';

import { Link } from '../src/Link';

figma.connect(
	Link,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A35013',
	{
		props: {
			size: figma.enum('Size', {
				Body1: 'body-1',
				Body2: 'body-2',
				Small1: 'small-1',
			}),
			fontWeight: figma.enum('Font weight', {
				Regular: 'regular',
				Semibold: 'semibold',
			}),
			link: figma.string('Link'),
			variant: figma.enum('Style', {
				Default: 'default',
				Subtle: 'subtle',
			}),
		},
		example: ({ variant }) => <Link variant={variant}>Link</Link>,
	},
);
