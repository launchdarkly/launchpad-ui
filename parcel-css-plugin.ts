/* eslint-disable @typescript-eslint/no-var-requires */
import type { Plugin } from 'vite';

const path = require('path');

const css = require('@parcel/css');
const browserslist = require('browserslist');

const pkg = require('./package.json');

const fileRegex = /\.(css)$/;

export default function parcelCssPlugin(): Plugin {
  return {
    name: 'parcel-css',

    transform(src, id) {
      if (fileRegex.test(id)) {
        const filename = path.basename(id);
        const targets = css.browserslistToTargets(browserslist(pkg.browserslist.join(', ')));

        let { code, map } = css.bundle({
          filename: id,
          minify: true,
          targets,
          drafts: { nesting: true, customMedia: true },
          sourceMap: true,
        });

        code = code.toString() + `\n/*# sourceMappingURL=${filename}.map */\n`;
        map = JSON.parse(map.toString());

        return {
          code,
          map,
        };
      }
    },
  };
}
