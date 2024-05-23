import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
	source: ['src/*.json'],
	platforms: {
		css: {
			prefix: 'lp',
			transformGroup: 'css',
			transforms: ['name/kebab', 'time/seconds', 'size/rem', 'color/rgb'],
			buildPath: 'dist/',
			files: [
				{
					destination: 'index.css',
					format: 'css/variables',
					options: {
						outputReferences: true,
					},
					filter: (token) => token.filePath !== 'src/color-aliases.json',
				},
				{
					destination: 'themes.css',
					format: 'css/variables',
					options: {
						outputReferences: true,
					},
					filter: (token) => token.filePath === 'src/color-aliases.json',
				},
			],
		},
	},
});

await sd.buildAllPlatforms();
