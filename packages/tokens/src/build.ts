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
import { formats, transformGroups, transforms, transformTypes } from 'style-dictionary/enums';
import { fileHeader, minifyDictionary, usesReferences } from 'style-dictionary/utils';

import { css, themes } from './themes';

const [light, dark] = themes;
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

// OKLch → sRGB hex conversion.
// Style Dictionary's built-in colorRgb transform uses tinycolor2, which does not
// support the oklch() color format. This preprocessor converts oklch values to hex
// before any transforms run, so downstream consumers receive standard hex colors.
function oklchToHex(str: string): string {
	const match = str.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/);
	if (!match) return str;

	const L = Number.parseFloat(match[1]);
	const C = Number.parseFloat(match[2]);
	const H = Number.parseFloat(match[3]);

	const hRad = (H * Math.PI) / 180;
	const a = C * Math.cos(hRad);
	const b = C * Math.sin(hRad);

	const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
	const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
	const s_ = L - 0.0894841775 * a - 1.291485548 * b;

	const l3 = l_ * l_ * l_;
	const m3 = m_ * m_ * m_;
	const s3 = s_ * s_ * s_;

	const rLin = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
	const gLin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
	const bLin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

	const linearToSrgb = (x: number) => {
		const c = Math.max(0, Math.min(1, x));
		return c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
	};

	const toHex = (v: number) =>
		Math.round(linearToSrgb(v) * 255)
			.toString(16)
			.padStart(2, '0');

	return `#${toHex(rLin)}${toHex(gLin)}${toHex(bLin)}`;
}

const convertOklchValues = (slice: DesignTokens | DesignToken): PreprocessedTokens => {
	const clone = structuredClone(slice);
	const recurse = (node: DesignTokens | DesignToken) => {
		for (const [key, val] of Object.entries(node)) {
			if (key === '$value' && typeof val === 'string' && val.startsWith('oklch(')) {
				(node as Record<string, unknown>)[key] = oklchToHex(val);
			} else if (typeof val === 'object' && val !== null) {
				recurse(val as DesignTokens);
			}
		}
	};
	recurse(clone);
	return clone as PreprocessedTokens;
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
	log: { verbosity: 'verbose' },
	source: [
		'tokens/*.json',
		'!tokens/color-aliases.dark.json',
		'!tokens/color-primitives.dark.json',
		'!tokens/color-primitives-map.dark.json',
		'!tokens/color-tokens.json',
	],
	hooks: {
		preprocessors: {
			extensions: extensionsDtcgDelegate,
			'strip-extensions': removeExtensions,
			'convert-oklch': convertOklchValues,
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
					filter: (token) => !token.filePath.includes('color'),
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
			preprocessors: ['convert-oklch'],
			buildPath: 'dist/',
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					format: 'javascript/esm',
					destination: 'index.es.js',
					options: {
						minify: true,
					},
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
			preprocessors: ['convert-oklch', 'extensions'],
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: `figma.${light}.json`,
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

const modes = new StyleDictionary({
	log: { verbosity: 'verbose' },
	source: [`tokens/*.${light}.json`, `tokens/*.${dark}.json`, 'tokens/color-primitives-map.json'],
	hooks: {
		preprocessors: {
			'convert-oklch': convertOklchValues,
		},
	},
	platforms: {
		figma: {
			buildPath: 'dist/',
			transforms: [transforms.nameKebab, transforms.attributeColor],
			preprocessors: ['convert-oklch'],
			options: {
				outputReferences: true,
				usesDtcg: true,
			},
			files: [
				{
					destination: `figma.${dark}.json`,
					format: 'json/figma',
					filter: (token) => token.filePath.includes(dark),
				},
			],
		},
	},
});

StyleDictionary.registerFormat({
	name: 'css/themes',
	format: async () => {
		const lightMode = aliasTokens[`${light}.css`];
		const darkMode = aliasTokens[`${dark}.css`];

		return `${lightMode}\n${darkMode}`;
	},
});

StyleDictionary.registerFormat({
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

StyleDictionary.registerFormat({
	name: 'custom/json',
	format: async ({ dictionary, options }) => {
		return `${JSON.stringify(minifyDictionary(dictionary.tokens, options.usesDtcg), null, 2)}\n`;
	},
});

StyleDictionary.registerFormat({
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

StyleDictionary.registerFormat({
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

StyleDictionary.registerFormat({
	name: 'typescript/accurate-module-declarations',
	format: async ({ dictionary, options }) => {
		return `declare const root: RootObject\nexport default root\n${JsonToTS(
			minifyDictionary(dictionary.tokens, options.usesDtcg),
		).join('\n')}`;
	},
});

StyleDictionary.registerFormat({
	name: 'json/category',
	format: async ({ dictionary }) => {
		const groups = dictionary.allTokens.reduce((acc: TransformedToken, obj) => {
			const key = obj.attributes?.category as string;
			const group = acc[key] ?? [];
			// biome-ignore lint/performance/noAccumulatingSpread: ignore
			return { ...acc, [key]: [...group, obj] };
		}, {} as TransformedToken);
		return `${JSON.stringify(groups, null, 2)}\n`;
	},
});

StyleDictionary.registerFormat({
	name: 'json/figma',
	format: async ({ dictionary }) => {
		const tokens = dictionary.allTokens.map((token) => {
			const { attributes, $description: description = '', $extensions } = token;
			const { hiddenFromPublishing, scopes } = $extensions?.['com.figma'] || {};

			const [collection] = token.filePath
				.replace('tokens/', '')
				.split('.')
				.filter((path) => path !== 'json');

			const { r, g, b, a } = { ...(attributes?.rgb as RGBA) };
			const original: VariableValue =
				token.$type === 'color' ? { r: r / 255, g: g / 255, b: b / 255, a } : token.$value;
			const value: VariableValue = usesReferences(token.original.$value)
				? {
						type: 'VARIABLE_ALIAS',
						id: token.original.$value.trim().replace(/[{}]/g, '').split('.').join('/'),
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
			} satisfies Variable;
		});
		return `${JSON.stringify(tokens, null, 2)}\n`;
	},
});

StyleDictionary.registerTransform({
	name: 'custom/value/name',
	type: transformTypes.attribute,
	transform: (token) => {
		token.$value = token.name;
		return token;
	},
});

StyleDictionary.registerTransform({
	name: 'attribute/font',
	type: transformTypes.attribute,
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
await modes.buildAllPlatforms();
