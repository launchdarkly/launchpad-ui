import type { RGBA, VariableValue } from '@figma/rest-api-spec';
import type {
	Config,
	DesignToken,
	DesignTokens,
	PreprocessedTokens,
	TransformedToken,
} from 'style-dictionary/types';
import type { Variable } from './types';

import JsonToTS from 'json-to-ts';
import StyleDictionary from 'style-dictionary';
import { formats, transformGroups, transforms } from 'style-dictionary/enums';
import { fileHeader, minifyDictionary, usesReferences } from 'style-dictionary/utils';

import { css, themes } from './themes';

const configs = themes.map(css);

const runSD = async (cfg: Config) => {
	const sd = new StyleDictionary(cfg);
	const [file] = await sd.formatPlatform('css');
	return [file.destination, file.output];
};

const aliasTokens = Object.fromEntries(await Promise.all(configs.map(runSD)));

/**
 * [$extensions](https://tr.designtokens.org/format/#extensions-0)
 *
 * https://github.com/amzn/style-dictionary/blob/main/lib/utils/typeDtcgDelegate.js
 */
const extensionsDtcgDelegate = (tokens: DesignTokens): PreprocessedTokens => {
	const clone = structuredClone(tokens);

	const recurse = (slice: DesignTokens | DesignToken, _extensions: string) => {
		let extensions = _extensions;
		const keys = Object.keys(slice);
		if (!keys.includes('$extensions') && extensions && keys.includes('$value')) {
			slice.$extensions = extensions;
		}

		if (slice.$extensions) {
			extensions = slice.$extensions;
			if (slice.$value === undefined) {
				delete slice.$extensions;
			}
		}

		for (const val of Object.values(slice)) {
			if (typeof val === 'object') {
				recurse(val, extensions);
			}
		}
	};
	//@ts-ignore
	recurse(clone);
	return clone as PreprocessedTokens;
};

const removeExtensions = (slice: DesignTokens | DesignToken): PreprocessedTokens => {
	delete slice.$extensions;
	for (const value of Object.values(slice)) {
		if (typeof value === 'object') {
			removeExtensions(value);
		}
	}
	return slice as PreprocessedTokens;
};

const getResolvedType = (value: DesignToken['$value']) => {
	switch (typeof value) {
		case 'object':
			return 'COLOR';
		case 'number':
			return 'FLOAT';
		case 'string':
			return 'STRING';
		case 'boolean':
			return 'BOOLEAN';
		default:
			throw new Error(`Invalid token type: ${typeof value}`);
	}
};

const sd = new StyleDictionary({
	source: ['tokens/*.json'],
	hooks: {
		preprocessors: {
			extensions: extensionsDtcgDelegate,
			'strip-extensions': removeExtensions,
		},
	},
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
		figma: {
			buildPath: 'dist/',
			transforms: [transforms.nameKebab, transforms.attributeColor],
			preprocessors: ['extensions'],
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: 'figma.json',
					format: 'json/figma',
					filter: (token) => token.$extensions,
				},
			],
		},
		json: {
			buildPath: 'dist/',
			transforms: [transforms.nameKebab, 'custom/value/name'],
			preprocessors: ['strip-extensions'],
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
	name: 'css/themes',
	format: async () => {
		const light = aliasTokens['default.css'];
		const dark = aliasTokens['dark.css'];

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

sd.registerFormat({
	name: 'json/figma',
	format: async ({ dictionary }) => {
		const tokens = dictionary.allTokens.map((token) => {
			const { attributes, $description: description, $extensions } = token;
			const { hiddenFromPublishing, scopes } = $extensions['com.figma'];

			const [collection, mode] = token.filePath
				.replace('tokens/', '')
				.split('.')
				.filter((path) => path !== 'json');

			const { r, g, b, a } = { ...(attributes?.rgb as RGBA) };
			const original: VariableValue =
				token.$type === 'color' ? { r: r / 255, g: g / 255, b: b / 255, a } : token.$value;
			const value: VariableValue = usesReferences(token.original.$value)
				? {
						type: 'VARIABLE_ALIAS',
						id: token.original.$value
							.trim()
							.replace(/[\{\}]/g, '')
							.split('.')
							.join('/'),
					}
				: original;
			const resolvedType = getResolvedType(original);

			return {
				name: token.name.split('-').join('/'),
				description,
				value,
				hiddenFromPublishing,
				scopes,
				codeSyntax: { WEB: `var(--lp-${token.name})` },
				resolvedType,
				collection,
				mode,
			} satisfies Variable;
		});
		return `${JSON.stringify(tokens, null, 2)}\n`;
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
