import figma from '@figma/code-connect';

import { TagGroup, TagList } from '../src';

figma.connect(
	TagGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-32126',
	{
		props: {
			label: figma.boolean('Has label', {
				true: figma.children(['Label']),
				false: undefined,
			}),
			tags: figma.children('Tag'),
		},
		example: ({ tags, label }) => (
			<TagGroup>
				{label}
				<TagList>{tags}</TagList>
			</TagGroup>
		),
	},
);
