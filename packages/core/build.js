/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('../../scripts/esbuild.js');

build(require('./package.json'));
