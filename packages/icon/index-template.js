/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const defaultIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}'`;
  });
  exportEntries.push(`export { Icon } from './Icon';`);
  exportEntries.push(`export { IconSize } from './types';`);

  return exportEntries.join('\n');
};

module.exports = defaultIndexTemplate;
