import figma from '@figma/code-connect';

import { Group, IconButton, Input, SearchField } from '../src';

figma.connect(
	SearchField,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10993-56547',
	{
		props: {
			label: figma.boolean('Label?', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			isInvalid: figma.enum('State', { Invalid: true }),
			isDisabled: figma.enum('State', { Disabled: true }),
		},
		example: ({ label, isInvalid, isDisabled }) => (
			<SearchField isInvalid={isInvalid} isDisabled={isDisabled}>
				{label}
				<Group>
					{/* <Icon name="search" size="small" /> */}
					<Input placeholder="Enter a value" />
					<IconButton
						aria-label="clear"
						icon="cancel-circle-outline"
						size="small"
						variant="minimal"
					/>
				</Group>
			</SearchField>
		),
	},
);
