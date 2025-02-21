import fs from 'fs';
import { client } from '@figma/code-connect';

// https://github.com/figma/code-connect/blob/main/cli/scripts/README.md
const generateIcons = async () => {
	const components = await client.getComponents(
		'https://figma.com/file/98HKKXL2dTle29ikJ3tzk7?node-id=1-1483',
	);

	fs.writeFileSync(
		'figma/Icon.figma.tsx',
		`// Do not edit directly, this file was auto-generated.

import figma from '@figma/code-connect';

import { Icon } from '../src';

${components
	.map(
		(c) => `figma.connect(Icon, '${c.figmaUrl}', {
	props: {
    name: '${c.name}',
  },
	example: () => <Icon name="${c.name}" />,
});`,
	)
	.join('\n\n')}
`,
	);
};

generateIcons();
