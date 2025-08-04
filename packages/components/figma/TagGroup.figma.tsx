import figma from '@figma/code-connect';
import { Label } from '@launchpad-ui/components';

import { Tag, TagGroup, TagList } from '../src/TagGroup';

figma.connect(
	TagGroup,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A32126',
	{
		props: {
			hasLabel: figma.boolean('Has label'),
			label: figma.string('Label'),
		},
		example: (props) => (
			<TagGroup>
				{props.hasLabel && <Label>{props.label}</Label>}
				<TagList>
					<Tag>One</Tag>
					<Tag>Two</Tag>
					<Tag>Three</Tag>
				</TagList>
			</TagGroup>
		),
	},
);
