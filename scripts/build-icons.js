/* eslint-disable */
const fs = require('fs');
const path = require('path');

const iconsPath = path.join(__dirname, '../packages/icons/src/img/sprite.svg');
const icons = fs.readFileSync(iconsPath, 'utf8');
const matchResult = icons.match(/id="lp-icon-([a-z-]+)"/g);

if (matchResult) {
  const ids = matchResult.map((id) => id.slice(12, -1));
  const stylizedString = JSON.stringify(ids, null, 2).replace(/"/g, "'").slice(0, -2) + ',';
  const outputPath = path.join(__dirname, '../packages/icons/src/types.ts');
  const output = `const icons = ${stylizedString}
] as const;
type IconName = (typeof icons)[number];

export type { IconName };
export { icons };
`;

  fs.writeFileSync(outputPath, `${output}`);
} else {
  console.log('No icon IDs found in the SVG file.');
}
