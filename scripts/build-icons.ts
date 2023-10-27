import fs from 'fs';
import path from 'path';

const iconsPath: string = path.join(__dirname, '../packages/icons/src/img/sprite.svg');
const icons: string = fs.readFileSync(iconsPath, 'utf8');
const matchResult: RegExpMatchArray | null = icons.match(/id="lp-icon-([a-z-]+)"/g);

if (matchResult) {
  const ids: string[] = matchResult.map((id: string) => id.slice(12, -1));
  const stylizedString: string = JSON.stringify(ids, null, 2).replace(/"/g, "'").slice(0, -2) + ',';
  const outputPath: string = path.join(__dirname, '../packages/icons/src/types.ts');
  const output: string = `const icons = ${stylizedString}
] as const;
type IconName = (typeof icons)[number];

export type { IconName };
export { icons };
`;

  fs.writeFileSync(outputPath, output, 'utf8');
} else {
  console.log('No icon IDs found in the SVG file.');
}
