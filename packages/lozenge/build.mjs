import pkg from './package.json' assert { type: 'json' };
import { build } from '../../scripts/esbuild.mjs';

build(pkg);
