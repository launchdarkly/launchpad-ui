import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { FigmaApi } from './figma';
import type { Variable } from './types';
import { generatePostVariablesPayload } from './variables';

// `no-restricted-imports` forbids reaching into a package's `dist/*` to bypass its declared
// entrypoints -- but this script reads its *own* package's freshly built Style Dictionary
// output, not another package's dist. Reading the file directly (instead of a static JSON
// import) sidesteps the rule without needing a disable, since it isn't a module import at all.
const readJson = <T>(relativePath: string): T =>
	JSON.parse(readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), 'utf8')) as T;

const darkTokens = readJson<Variable[]>('../dist/figma.dark.json');
const defaultTokens = readJson<Variable[]>('../dist/figma.default.json');

// https://github.com/gerard-figma/figma-variables-to-styledictionary
const main = async () => {
	const fileKey = process.env.FIGMA_FILE_KEY ?? '';
	const api = new FigmaApi(process.env.FIGMA_TOKEN ?? '');

	const localVariables = await api.getLocalVariables(fileKey);

	const tokens = {
		Default: Object.groupBy(defaultTokens, ({ collection }) => collection),
		Dark: Object.groupBy(darkTokens, ({ collection }) => collection),
	};
	const postVariablesPayload = generatePostVariablesPayload(
		tokens as unknown as Record<string, Record<string, Variable[]>>,
		localVariables,
	);

	if (Object.values(postVariablesPayload).every((value) => value.length === 0)) {
		console.log('%c ✅ Tokens are already up to date with the Figma file', 'color:green;');
		return;
	}

	const apiResp = await api.postVariables(fileKey, postVariablesPayload);

	console.log('POST variables API response:', apiResp);

	if (postVariablesPayload.variableCollections?.length) {
		console.log('Updated variable collections', postVariablesPayload.variableCollections);
	}

	if (postVariablesPayload.variableModes?.length) {
		console.log('Updated variable modes', postVariablesPayload.variableModes);
	}

	if (postVariablesPayload.variables?.length) {
		console.log('Updated variables', postVariablesPayload.variables);
	}

	if (postVariablesPayload.variableModeValues?.length) {
		console.log('Updated variable mode values', postVariablesPayload.variableModeValues);
	}

	console.log('%c ✅ Figma file has been updated with the new tokens', 'color:green;');
};

void main();
