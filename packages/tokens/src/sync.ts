import type { Variable } from './types';

import darkTokens from '../dist/figma.dark.json';
import defaultTokens from '../dist/figma.default.json';
import { FigmaApi } from './figma';
import { generatePostVariablesPayload } from './variables';

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

main();
