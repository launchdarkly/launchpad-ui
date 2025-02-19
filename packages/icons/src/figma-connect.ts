import fs from 'fs';
import { client } from '@figma/code-connect';

const generateIcons = async () => {
	const components = await client.getComponents(
		'https://figma.com/file/98HKKXL2dTle29ikJ3tzk7?node-id=1-1483',
	);

	fs.writeFileSync(
		'figma/Icon.figma.tsx',
		`// Do not edit directly, this file was auto-generated.\n\nimport figma from '@figma/code-connect';\n\nimport { Icon } from '../src';\n\n${components.map((c) => `figma.connect(Icon, '${c.figmaUrl}', {\n\texample: () => <Icon name="${c.name}" />,\n});`).join('\n\n')}\n`,
	);
};

generateIcons();
