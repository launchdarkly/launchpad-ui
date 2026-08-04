import fs from 'fs';
import path from 'path';
import type { Plugin, ResolvedConfig } from 'vite';

const cssImport = (): Plugin => {
	let config: ResolvedConfig;
	let cssFile: string | undefined;

	return {
		name: 'css-import',
		apply: 'build',
		enforce: 'post',

		configResolved(resolvedConfig) {
			config = resolvedConfig;
		},

		writeBundle(option, bundle) {
			if (!config.build || !config.build.lib) {
				return;
			}

			const files = Object.keys(bundle);

			if (option.format === 'es') {
				cssFile = files.find((v) => v.endsWith('.css'));
			}

			if (cssFile === undefined) {
				return;
			}

			for (const file of files) {
				// @ts-expect-error: Rollup's OutputAsset/OutputChunk union doesn't expose `isEntry` uniformly
				if (!bundle[file].isEntry) {
					continue;
				}
				const filePath = path.resolve('dist', file);
				const data = fs.readFileSync(filePath, {
					encoding: 'utf8',
				});

				const importStatement = option.format === 'es' ? `import './style.css'` : `require('./style.css')`;
				fs.writeFileSync(filePath, `${importStatement};\n${data}`);
			}
		},
	};
};

export { cssImport };
