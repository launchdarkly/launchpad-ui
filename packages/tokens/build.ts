import JsonToTS from 'json-to-ts';
import StyleDictionary from 'style-dictionary';
import { createPropertyFormatter, fileHeader, minifyDictionary } from 'style-dictionary/utils';

const sd = new StyleDictionary({
	source: ['src/*.json'],
	platforms: {
		css: {
			prefix: 'lp',
			transformGroup: 'css',
			transforms: ['name/kebab', 'time/seconds', 'size/rem', 'color/rgb'],
			buildPath: 'dist/',
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: 'index.css',
					format: 'css/variables',
					filter: (token) => token.filePath !== 'src/color-aliases.json',
				},
				{
					destination: 'themes.css',
					format: 'custom/css',
					filter: (token) => token.filePath === 'src/color-aliases.json',
				},
				{
					destination: 'media-queries.css',
					format: 'custom/media-query',
					filter: (token) => token.filePath === 'src/viewport.json',
				},
			],
		},
		js: {
			transformGroup: 'js',
			buildPath: 'dist/',
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					format: 'javascript/esm',
					destination: 'index.es.js',
				},
				{
					format: 'typescript/accurate-module-declarations',
					destination: 'index.d.ts',
				},
				{
					format: 'javascript/commonJs',
					destination: 'index.js',
				},
			],
		},
		json: {
			buildPath: 'dist/',
			transforms: ['name/kebab', 'custom/value/name'],
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: 'contract.json',
					format: 'custom/json',
				},
			],
		},
	},
});

sd.registerFormat({
	name: 'custom/css',
	format: async ({ dictionary, file, options }) => {
		const { outputReferences, outputReferenceFallbacks, usesDtcg } = options;
		const header = await fileHeader({ file });

		const formatProperty = createPropertyFormatter({
			outputReferences,
			outputReferenceFallbacks,
			dictionary,
			format: 'css',
			usesDtcg,
		});

		const dark = dictionary.allTokens
			.filter((token) => !!token.dark)
			.map((token) => {
				const { dark } = token;
				return Object.assign({}, token, {
					$value: dark,
					original: { ...token.original, $value: token.original.dark },
				});
			});

		const defaultTokens = `${header}:root, [data-theme='default'] {\n${dictionary.allTokens
			.filter((token) => !!token.$value)
			.map(formatProperty)
			.join('\n')}\n}\n`;
		const darkTokens = `[data-theme='dark'] {\n${dark.map(formatProperty).join('\n')}\n}\n`;

		return `${defaultTokens}\n${darkTokens}`;
	},
});

sd.registerFormat({
	name: 'custom/json',
	format: async ({ dictionary, options }) => {
		return `${JSON.stringify(minifyDictionary(dictionary.tokens, options.usesDtcg), null, 2)}\n`;
	},
});

sd.registerFormat({
	name: 'custom/media-query',
	format: async ({ dictionary }) => {
		return dictionary.allTokens
			.map((token) => {
				const { attributes, $value } = token;
				const size = attributes?.type;
				return `@custom-media --${size} screen and (min-width: ${$value});`;
			})
			.join('\n');
	},
});

sd.registerFormat({
	name: 'javascript/esm',
	format: async ({ dictionary, file, options }) => {
		const header = await fileHeader({ file });
		return `${header}export default ${JSON.stringify(
			minifyDictionary(dictionary.tokens, options.usesDtcg),
			null,
			2,
		)};\n`;
	},
});

sd.registerFormat({
	name: 'javascript/commonJs',
	format: async ({ dictionary, file, options }) => {
		const header = await fileHeader({ file });
		return `${header}exports.default = ${JSON.stringify(
			minifyDictionary(dictionary.tokens, options.usesDtcg),
			null,
			2,
		)};\n`;
	},
});

sd.registerFormat({
	name: 'typescript/accurate-module-declarations',
	format: async ({ dictionary, options }) => {
		return `declare const root: RootObject\nexport default root\n${JsonToTS(
			minifyDictionary(dictionary.tokens, options.usesDtcg),
		).join('\n')}`;
	},
});

sd.registerTransform({
	name: 'custom/value/name',
	type: 'attribute',
	transform: (token) => {
		token.$value = token.name;
		return token;
	},
});

await sd.buildAllPlatforms();
