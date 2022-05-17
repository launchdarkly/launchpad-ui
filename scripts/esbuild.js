/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const path = require('path');
const fg = require('fast-glob');
const browserslist = require('browserslist');
const fs = require('fs');
const css = require('@parcel/css');

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
  const cssPaths = await fg([`${path.resolve()}/src/**/*.css`]);

  const config = {
    minify: false,
    targets,
    drafts: { nesting: true },
  };

  cssPaths.forEach((cssPath) => {
    const name = cssPath.split('/').pop();
    const outFile = path.relative(`${path.resolve()}/src`, cssPath);

    const { code: bundled } = css.bundle({
      ...config,
      filename: cssPath,
    });

    const { code, map } = css.transform({
      ...config,
      filename: name,
      code: bundled,
      sourceMap: true,
    });

    fs.writeFile(`${path.resolve()}/dist/${outFile}`, code, { flag: 'w' }, (err) => {
      if (err) throw err;
    });
    fs.writeFile(`${path.resolve()}/dist/${outFile}.map`, map, { flag: 'w' }, (err) => {
      if (err) throw err;
    });
  });
};

module.exports = { build };
