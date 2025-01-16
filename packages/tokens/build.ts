import type { Config, TransformedToken } from 'style-dictionary/types';

import JsonToTS from 'json-to-ts';
import StyleDictionary from 'style-dictionary';
import { formats, transformGroups, transforms } from 'style-dictionary/enums';
import { fileHeader, minifyDictionary } from 'style-dictionary/utils';

const themes = ['dark', 'default'].map(
	(theme) =>
		({
			source: ['tokens/color-primitives.json', `tokens/*.${theme}.json`],
			platforms: {
				css: {
					prefix: 'lp',
					transformGroup: transformGroups.css,
					transforms: [transforms.colorRgb],
					options: {
						outputReferences: true,
						usesDtcg: true,
					},
					files: [
						{
							destination: `${theme}.css`,
							format: formats.cssVariables,
							options: {
								selector: theme === 'default' ? ':root, [data-theme]' : `[data-theme='${theme}']`,
							},
							filter: (token) => token.filePath.includes(theme),
						},
					],
				},
			},
		}) satisfies Config,
);

const runSD = async (cfg: Config) => {
	const sd = new StyleDictionary(cfg);
	const [file] = await sd.formatPlatform('css');
	return [file.destination, file.output];
};

const outputs = Object.fromEntries(await Promise.all(themes.map(runSD)));

const sd = new StyleDictionary({
	source: ['tokens/*.json'],
	platforms: {
		css: {
			prefix: 'lp',
			basePxFontSize: 16,
			transformGroup: transformGroups.css,
			transforms: [
				transforms.nameKebab,
				transforms.sizePxToRem,
				transforms.colorRgb,
				'attribute/font',
			],
			buildPath: 'dist/',
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: 'index.css',
					format: formats.cssVariables,
					filter: (token) => !token.filePath.includes('aliases'),
				},
				{
					destination: 'themes.css',
					format: 'css/themes',
				},
				{
					destination: 'media-queries.css',
					format: 'custom/media-query',
					filter: (token) => token.filePath === 'tokens/viewport.json',
				},
				{
					destination: 'fonts.css',
					format: 'custom/font-face',
					filter: (token) => token.$type === 'file',
				},
			],
			actions: ['copy_assets'],
		},
		js: {
			basePxFontSize: 16,
			transformGroup: transformGroups.js,
			transforms: [transforms.sizePxToRem, transforms.colorRgb],
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
			transforms: [transforms.nameKebab, 'custom/value/name'],
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
		vscode: {
			basePxFontSize: 16,
			buildPath: 'dist/',
			transformGroup: transformGroups.css,
			transforms: [transforms.nameKebab, transforms.sizePxToRem, transforms.colorRgb],
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: 'tokens.json',
					format: 'json/category',
				},
			],
		},
	},
});

sd.registerFormat({
	name: 'css/themes',
	format: async () => {
		const light = outputs['default.css'];
		const dark = outputs['dark.css'];

		return `${light}\n${dark}`;
	},
});

sd.registerFormat({
	name: 'custom/font-face',
	format: async ({ dictionary }) => {
		return dictionary.allTokens
			.map((token) => {
				const {
					// @ts-expect-error attr
					attributes: { family, weight, style },
					formats,
					$value,
				} = token;
				const urls = formats.map(
					(extension: string) => `url("./assets/${$value}.${extension}") format("${extension}")`,
				);
				return `@font-face {\n\tfont-family: "${family}";\n\tfont-style: ${style};\n\tfont-weight: ${weight};\n\tsrc: ${urls.join(',\n\t\t\t ')};\n\tfont-display: swap;\n}\n`;
			})
			.join('\n');
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

sd.registerFormat({
	name: 'json/category',
	format: async ({ dictionary }) => {
		const groups = dictionary.allTokens.reduce((acc: TransformedToken, obj) => {
			const key = obj.attributes?.category as string;
			const group = acc[key] ?? [];
			// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
			return { ...acc, [key]: [...group, obj] };
		}, {} as TransformedToken);
		return `${JSON.stringify(groups, null, 2)}\n`;
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

sd.registerTransform({
	name: 'attribute/font',
	type: 'attribute',
	filter: (token) => token.$type === 'file',
	transform: (token) => ({
		category: token.path[0],
		type: token.path[1],
		family: token.path[2],
		weight: token.path[3],
		style: token.path[4],
	}),
});

await sd.buildAllPlatforms();
