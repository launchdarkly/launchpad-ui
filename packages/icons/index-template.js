/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const defaultIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { ${exportName} } from './${basename}'`;
  });
  exportEntries.push(`export type { IconProps } from './Icon';`);
  exportEntries.push(`export { Icon } from './Icon';`);
  exportEntries.push(`export { IconDimension, IconSize } from './types';`);
  exportEntries.push(`export { KindIcon } from './KindIcon';`);
  exportEntries.unshift('/* c8 ignore start */');
  exportEntries.push('/* c8 ignore stop */');

  return exportEntries.join('\n');
};

module.exports = defaultIndexTemplate;
