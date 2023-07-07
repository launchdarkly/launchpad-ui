/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'icons');

const icons = [];

fs.readdir(filePath, (error, files) => {
  if (error) {
    console.error(error);
    return;
  }

  files.forEach((file) => {
    const name = file.replace('.svg', '');
    icons.push(`'${name}'`);
  });

  fs.writeFileSync(
    'src/types.ts',
    `const icons = [${icons.join(
      ','
    )}] as const;\ntype IconName = typeof icons[number];\nexport type { IconName };\nexport { icons };\n`,
    () => undefined
  );
});
