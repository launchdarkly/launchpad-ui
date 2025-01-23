import type { Config } from 'style-dictionary/types';

import { formats, transformGroups, transforms } from 'style-dictionary/enums';

export const themes = ['default', 'dark'] as const;
export type Theme = (typeof themes)[number];

export const css = (theme: Theme): Config => ({
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
});
