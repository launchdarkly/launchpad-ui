import { build as esbuild } from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  await esbuild({
    ...config,
    format: 'cjs',
    outfile: outFileMain,
  }).catch(() => process.exit(1));

  await esbuild({
    ...config,
    format: 'esm',
    outfile: outFileModule,
  }).catch(() => process.exit(1));
};

export { build };
