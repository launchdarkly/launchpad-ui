import type { DesignTokens } from 'style-dictionary/types';

import path from 'path';

import StyleDictionary from 'style-dictionary';
import { describe, expect, it } from 'vitest';

import { css } from '../src/themes';
import aliasDark from '../tokens/color-aliases.dark.json' with { type: 'json' };
import aliasDefault from '../tokens/color-aliases.default.json' with { type: 'json' };
import primitiveDark from '../tokens/color-primitives.dark.json' with { type: 'json' };
import primitiveDefault from '../tokens/color-primitives.default.json' with { type: 'json' };

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
	it('uses default theme as base for dark theme aliases', () => {
		expect(sameKeys(aliasDark, aliasDefault)).toBeTruthy();
	});

	it('uses default theme as base for dark theme primitives', () => {
		expect(sameKeys(primitiveDark, primitiveDefault)).toBeTruthy();
	});

	it('builds default tokens', async () => {
		const config = css('default');
		config.source = [
			path.resolve(__dirname, '../tokens/color-primitives.default.json'),
			path.resolve(__dirname, '../tokens/*.default.json'),
		];

		const sd = new StyleDictionary(config);
		const [file] = await sd.formatPlatform('css');

		expect(file.output).toMatchSnapshot();
	});

	it('builds dark tokens', async () => {
		const config = css('dark');
		config.source = [
			path.resolve(__dirname, '../tokens/color-primitives.default.json'),
			path.resolve(__dirname, '../tokens/*.dark.json'),
		];

		const sd = new StyleDictionary(config);
		const [file] = await sd.formatPlatform('css');

		expect(file.output).toMatchSnapshot();
	});
});
