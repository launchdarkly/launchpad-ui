/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const css = require('@parcel/css');
const browserslist = require('browserslist');
const esbuild = require('esbuild');
const fg = require('fast-glob');

const build = async (packageJSON) => {
  const outFileMain = packageJSON.main;
  const outFileModule = packageJSON.module;
  const entryPoints = [packageJSON.source];

  const config = {
    bundle: true,
    target: 'es2020',
    entryPoints,
    platform: 'node',
    sourcemap: true,
    external: [
      ...Object.keys(packageJSON.dependencies || {}),
      ...Object.keys(packageJSON.peerDependencies || {}),
      '*.css',
    ],
    inject: [path.resolve(__dirname, './react-shim.js')],
  };

  await esbuild
    .build({
      ...config,
      format: 'cjs',
      outfile: outFileMain,
    })
    .catch(() => process.exit(1));

  await esbuild
    .build({
      ...config,
      format: 'esm',
      outfile: outFileModule,
    })
    .catch(() => process.exit(1));

  await buildCss();
};

const buildCss = async () => {
  const targets = css.browserslistToTargets(browserslist('last 2 versions, not dead, not IE 11'));
  const cssPaths = await fg([`src/**/*.css`]);

  cssPaths.forEach((cssPath) => {
    const outFile = path.relative('src', cssPath);
    const dest = `dist/${outFile}`;
    const name = cssPath.split('/').pop();

    let { code, map } = css.bundle({
      filename: cssPath,
      minify: true,
      targets,
      drafts: { nesting: true, customMedia: true },
      sourceMap: true,
    });

    code = code.toString() + `\n/*# sourceMappingURL=${name}.map */\n`;

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, code);
    fs.writeFileSync(`${dest}.map`, map);
  });
};

module.exports = { build };
