import figma from '@figma/code-connect';

import { Tab } from '../src/Tabs';

figma.connect(
	Tab,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-45112',
	{
		props: {
			label: figma.string('Label'),
			selected: figma.boolean('Selected'),
		},
		example: (props) => <Tab id="1">{props.label}</Tab>,
	},
);
