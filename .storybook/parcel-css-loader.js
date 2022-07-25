const path = require('path');
const css = require('@parcel/css');
const browserslist = require('browserslist');
const pkg = require('../package.json');

module.exports = function (source) {
  const filename = path.basename(this.resourcePath);

  const assetInfo = { sourceFilename: filename };

  this.emitFile(filename, source, null, assetInfo);

  const targets = css.browserslistToTargets(browserslist(pkg.browserslist.join(', ')));

  let { code, map } = css.bundle({
    filename: this.resourcePath,
    minify: true,
    targets,
    drafts: { nesting: true, customMedia: true },
    sourceMap: true,
  });

  code = code.toString() + `\n/*# sourceMappingURL=${filename}.map */\n`;

  this.callback(null, code, JSON.parse(map.toString()));

  return;
};
