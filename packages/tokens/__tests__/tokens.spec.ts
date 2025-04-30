import type { DesignTokens } from 'style-dictionary/types';

import path from 'path';
import StyleDictionary from 'style-dictionary';
import { formats, transformGroups, transforms } from 'style-dictionary/enums';
import { describe, expect, it } from 'vitest';

import { css } from '../src/themes';
import aliasDark from '../tokens/color-aliases.dark.json' with { type: 'json' };
import aliasDefault from '../tokens/color-aliases.default.json' with { type: 'json' };

const primitives = () => ({
	source: [path.resolve(__dirname, '../tokens/color-primitives.json')],
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
					destination: 'primitives.css',
					format: formats.cssVariables,
				},
			],
		},
	},
});

const sameKeys = (tokens1: DesignTokens, tokens2: DesignTokens) => {
	for (const key in tokens1) {
		if (!(key in tokens2)) {
			return false;
		}

		if (typeof tokens1[key] === 'object' && typeof tokens2[key] === 'object') {
			if (!sameKeys(tokens1[key], tokens2[key])) {
				return false;
			}
		}
	}

	return true;
};

describe('Tokens', () => {
	it('uses default theme as base for dark theme', () => {
		expect(sameKeys(aliasDark, aliasDefault)).toBeTruthy();
	});

	it('builds default primitive tokens', async () => {
		const config = primitives();

		const sd = new StyleDictionary(config);
		const [file] = await sd.formatPlatform('css');

		expect(file.output).toMatchSnapshot();
	});

	it('builds default alias tokens', async () => {
		const config = css('default');
		config.source = [
			path.resolve(__dirname, '../tokens/color-primitives.json'),
			path.resolve(__dirname, '../tokens/color-aliases.default.json'),
		];

		const sd = new StyleDictionary(config);
		const [file] = await sd.formatPlatform('css');

		expect(file.output).toMatchSnapshot();
	});

	it('builds dark alias tokens', async () => {
		const config = css('dark');
		config.source = [
			path.resolve(__dirname, '../tokens/color-primitives.json'),
			path.resolve(__dirname, '../tokens/color-aliases.dark.json'),
		];

		const sd = new StyleDictionary(config);
		const [file] = await sd.formatPlatform('css');

		expect(file.output).toMatchSnapshot();
	});
});
