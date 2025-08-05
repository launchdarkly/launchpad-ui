import figma from '@figma/code-connect';

import { Label, Tag, TagGroup, TagList } from '../src';

figma.connect(
	TagGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-32126',
	{
		props: {
			hasLabel: figma.boolean('Has label'),
		},
		example: (props) => (
			<TagGroup>
				{props.hasLabel && <Label>Label text</Label>}
				<TagList>
					<Tag>One</Tag>
					<Tag>Two</Tag>
					<Tag>Three</Tag>
				</TagList>
			</TagGroup>
		),
	},
);
