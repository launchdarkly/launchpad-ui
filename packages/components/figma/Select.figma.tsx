import figma from '@figma/code-connect';

import { Button } from '../src/Button';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { Popover } from '../src/Popover';
import { Select, SelectValue } from '../src/Select';

figma.connect(
	Select,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10974-97679',
	{
		props: {
			label: figma.boolean('Label?', {
				true: 'Select an option',
				false: undefined,
			}),
		},
		example: ({ label }) => (
			<Select selectedKey="1" onSelectionChange={(key) => console.log(key)}>
				{label}
				<Button>
					<SelectValue />
					{/* <Icon name="chevron-down" size="small" variant="default" /> */}
				</Button>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
					</ListBox>
				</Popover>
			</Select>
		),
	},
);
