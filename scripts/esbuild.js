/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const path = require('path');

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
    external: Object.keys(packageJSON.peerDependencies),
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
};

module.exports = { build };
