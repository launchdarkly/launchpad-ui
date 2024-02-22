import JsonToTS from 'json-to-ts';
import StyleDictionary from 'style-dictionary-utils';
import yaml from 'yaml';

const reservedColorValues = [
	'inherit',
	'initial',
	'revert',
	'unset',
	'currentcolor',
	'transparent',
];

StyleDictionary.registerFormat({
	name: 'custom/format/custom-media',
	formatter({ dictionary }) {
		return dictionary.allProperties
			.map((prop) => {
				const { attributes, value } = prop;
				const size = attributes?.type;
				return `@custom-media --${size} screen and (min-width: ${value});`;
			})
			.join('\n');
	},
});

StyleDictionary.registerFormat({
	name: 'css/theme-variables',
	formatter: ({ dictionary, file, options }) => {
		const darkTokens = themeTokens(dictionary, 'dark');
		const defaultTokens = StyleDictionary.formatHelpers.formattedVariables({
			format: 'css',
			dictionary,
			outputReferences: options.outputReferences,
		});

		const darkColorCSSVariables = `[data-theme='dark'] {\n${darkTokens}\n}\n`;
		const defaultColorCSSVariables = `:root, [data-theme='default'] {\n${defaultTokens}\n}\n`;

		return `${StyleDictionary.formatHelpers.fileHeader({
			file,
		})}${defaultColorCSSVariables}\n${darkColorCSSVariables}`;
	},
});

StyleDictionary.registerFormat({
	name: 'typescript/accurate-module-declarations',
	formatter({ dictionary }) {
		return `declare const root: RootObject\nexport default root\n${JsonToTS(
			StyleDictionary.formatHelpers.minifyDictionary(dictionary.tokens),
		).join('\n')}`;
	},
});

StyleDictionary.registerTransform({
	type: 'value',
	transitive: true,
	name: 'value/path',
	transformer: (token) => {
		return token.name;
	},
});

StyleDictionary.registerTransform({
	type: StyleDictionary.transform['color/rgb'].type,
	name: 'custom/rgb',
	matcher: StyleDictionary.transform['color/rgb'].matcher,
	transformer: (token) => {
		if (reservedColorValues.includes(token.value)) {
			return token.value;
		}
		return StyleDictionary.transform['color/rgb'].transformer(token, {});
	},
});

const myStyleDictionary = StyleDictionary.extend({
	parsers: [
		{
			pattern: /\.yaml$/,
			parse: ({ contents }) => yaml.parse(contents),
		},
	],
	source: ['src/**/*.yaml'],
	platforms: {
		css: {
			prefix: 'lp',
			transforms: [
				'attribute/cti',
				'name/cti/kebab',
				'time/seconds',
				'content/icon',
				'size/rem',
				'custom/rgb',
				'font/css',
			],
			buildPath: 'dist/',
			files: [
				{
					destination: 'index.css',
					format: 'css/variables',
					options: {
						outputReferences: true,
					},
					filter: (token) => token.filePath !== 'src/color-aliases.yaml',
				},
				{
					destination: 'themes.css',
					format: 'css/theme-variables',
					options: {
						outputReferences: true,
					},
					filter: (token) =>
						token.filePath === 'src/color-aliases.yaml' && token.attributes?.category === 'color',
				},
			],
		},
		ts: {
			transformGroup: 'js',
			buildPath: 'dist/',
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
		'media-query': {
			transformGroup: 'css',
			buildPath: 'dist/',
			files: [
				{
					destination: 'media-queries.css',
					format: 'custom/format/custom-media',
					filter: { attributes: { category: 'viewport' } },
				},
			],
		},
		json: {
			buildPath: 'dist/',
			transforms: ['attribute/cti', 'name/cti/kebab', 'value/path'],
			files: [
				{
					format: 'json/nested',
					destination: 'contract.json',
				},
			],
		},
	},
});

const themeTokens = (dictionary: StyleDictionary.Dictionary, theme = '') =>
	dictionary.allTokens
		.map((token) => {
			let value = token[theme] || token.value;
			const original = token.original[theme] || token.original.value;
			if (dictionary.usesReference(original)) {
				const refs = dictionary.getReferences(original);
				for (const ref of refs) {
					value = value.replace(ref.value, () => {
						return `var(--${ref.name})`;
					});
				}
			} else if (!reservedColorValues.includes(value)) {
				value = StyleDictionary.transform['color/rgb'].transformer(
					{ value } as StyleDictionary.TransformedToken,
					{},
				);
			}
			return `  --${token.name}: ${value};`;
		})
		.join('\n');

myStyleDictionary.buildAllPlatforms();
