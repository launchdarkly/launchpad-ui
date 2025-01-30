import type {
	GetLocalVariablesResponse,
	LocalVariable,
	LocalVariableCollection,
	PostVariablesRequestBody,
	VariableAlias,
	VariableCodeSyntax,
	VariableCreate,
	VariableUpdate,
	VariableValue,
} from '@figma/rest-api-spec';
import type { Variable } from './types';

import { colorApproximatelyEqual } from './color';

const areSetsEqual = <T>(a: Set<T>, b: Set<T>) => {
	return a.size === b.size && [...a].every((item) => b.has(item));
};

const variableValueFromToken = (
	token: Variable,
	localVariablesByCollectionAndName: {
		[variableCollectionId: string]: { [variableName: string]: LocalVariable };
	},
): VariableValue => {
	if (typeof token.value === 'object' && (token.value as VariableAlias).type === 'VARIABLE_ALIAS') {
		// Assume aliases are in the format {group.subgroup.token} with any number of optional groups/subgroups
		// The Figma syntax for variable names is: group/subgroup/token
		const value = (token.value as VariableAlias).id;

		// When mapping aliases to existing local variables, we assume that variable names
		// are unique *across all collections* in the Figma file
		for (const localVariablesByName of Object.values(localVariablesByCollectionAndName)) {
			// Remove the root since the collection acts as the root - color/blue/500 -> blue/500
			const name = value.split('/').slice(1).join('/');
			if (localVariablesByName[name]) {
				return {
					type: 'VARIABLE_ALIAS',
					id: localVariablesByName[name].id,
				};
			}
		}

		// If we don't find a local variable matching the alias, we assume it's a variable
		// that we're going to create elsewhere in the payload.
		// If the file has an invalid alias, we rely on the Figma API to return a 400 error
		return {
			type: 'VARIABLE_ALIAS',
			id: value,
		};
	}

	return token.value;
};

const compareVariableValues = (a: VariableValue, b: VariableValue) => {
	if (typeof a === 'object' && typeof b === 'object') {
		if ('type' in a && 'type' in b && a.type === 'VARIABLE_ALIAS' && b.type === 'VARIABLE_ALIAS') {
			return a.id === b.id;
		}

		if ('a' in a && 'a' in b) {
			return colorApproximatelyEqual(a, b);
		}
	} else {
		return a === b;
	}

	return false;
};

const isCodeSyntaxEqual = (a: VariableCodeSyntax, b: VariableCodeSyntax) => {
	return (
		Object.keys(a).length === Object.keys(b).length &&
		Object.keys(a).every(
			(key) => a[key as keyof VariableCodeSyntax] === b[key as keyof VariableCodeSyntax],
		)
	);
};

/**
 * Get writable token properties that are different from the variable.
 * If the variable does not exist, all writable properties are returned.
 *
 * This function is being used to decide what properties to include in the
 * POST variables call to update variables in Figma. If a token does not have
 * a particular property, we do not include it in the differences object to avoid
 * touching that property in Figma.
 */
const tokenAndVariableDifferences = (token: Variable, variable: LocalVariable | null) => {
	const differences: Partial<
		Omit<
			VariableCreate | VariableUpdate,
			'id' | 'name' | 'variableCollectionId' | 'resolvedType' | 'action'
		>
	> = {};

	if (
		token.description !== undefined &&
		(!variable || token.description !== variable.description)
	) {
		differences.description = token.description;
	}

	if (
		token.hiddenFromPublishing !== undefined &&
		(!variable || token.hiddenFromPublishing !== variable.hiddenFromPublishing)
	) {
		differences.hiddenFromPublishing = token.hiddenFromPublishing;
	}

	if (
		token.scopes &&
		(!variable || !areSetsEqual(new Set(token.scopes), new Set(variable.scopes)))
	) {
		differences.scopes = token.scopes;
	}

	if (
		token.codeSyntax &&
		(!variable || !isCodeSyntaxEqual(token.codeSyntax, variable.codeSyntax))
	) {
		differences.codeSyntax = token.codeSyntax;
	}

	return differences;
};

const generatePostVariablesPayload = (
	tokens: Record<string, Record<string, Variable[]>>,
	localVariables: GetLocalVariablesResponse,
) => {
	const localVariableCollectionsByName: { [name: string]: LocalVariableCollection } = {};
	const localVariablesByCollectionAndName: {
		[variableCollectionId: string]: { [variableName: string]: LocalVariable };
	} = {};

	for (const collection of Object.values(localVariables.meta.variableCollections)) {
		if (localVariableCollectionsByName[collection.name]) {
			throw new Error(`Duplicate variable collection in file: ${collection.name}`);
		}

		localVariableCollectionsByName[collection.name] = collection;
	}

	for (const variable of Object.values(localVariables.meta.variables)) {
		if (!localVariablesByCollectionAndName[variable.variableCollectionId]) {
			localVariablesByCollectionAndName[variable.variableCollectionId] = {};
		}

		localVariablesByCollectionAndName[variable.variableCollectionId][variable.name] = variable;
	}

	console.log(
		'Local variable collections in Figma file:',
		Object.keys(localVariableCollectionsByName),
	);

	const postVariablesPayload: PostVariablesRequestBody = {
		variableCollections: [],
		variableModes: [],
		variables: [],
		variableModeValues: [],
	};

	for (const [modeName, modeTokens] of Object.entries(tokens)) {
		for (const [collectionName, collectionTokens] of Object.entries(modeTokens)) {
			const variableCollection = localVariableCollectionsByName[collectionName];
			// Use the actual variable collection id or use the name as the temporary id
			const variableCollectionId = variableCollection ? variableCollection.id : collectionName;
			const variableMode = variableCollection?.modes.find((mode) => mode.name === modeName);
			// Use the actual mode id or use the name as the temporary id
			const modeId = variableMode ? variableMode.modeId : Math.random().toString(36).slice(2);

			if (
				!variableCollection &&
				!postVariablesPayload.variableCollections?.find((c) => c.id === variableCollectionId)
			) {
				postVariablesPayload.variableCollections?.push({
					action: 'CREATE',
					id: variableCollectionId,
					name: variableCollectionId,
					initialModeId: modeId, // Use the initial mode as the first mode
				});

				// Rename the initial mode, since we're using it as our first mode in the collection
				postVariablesPayload.variableModes?.push({
					action: 'UPDATE',
					id: modeId,
					name: modeName,
					variableCollectionId,
				});
			}

			// Add a new mode if it doesn't exist in the Figma file
			// and it's not the initial mode in the collection
			if (
				!variableMode &&
				!postVariablesPayload.variableCollections?.find(
					(c) =>
						c.id === variableCollectionId && 'initialModeId' in c && c.initialModeId === modeId,
				)
			) {
				postVariablesPayload.variableModes?.push({
					action: 'CREATE',
					id: modeId,
					name: modeName,
					variableCollectionId,
				});
			}

			const localVariablesByName = localVariablesByCollectionAndName[variableCollection?.id];

			for (const token of collectionTokens) {
				// Remove the root since the collection acts as the root - color/blue/500 -> blue/500
				const tokenName = token.name.split('/').slice(1).join('/');
				const variable = localVariablesByName[tokenName];
				const variableId = variable ? variable.id : token.name;
				const variableInPayload = postVariablesPayload.variables?.find(
					(v) =>
						v.id === variableId &&
						'variableCollectionId' in v &&
						v.variableCollectionId === variableCollectionId,
				);
				const differences = tokenAndVariableDifferences(token, variable);

				// Add a new variable if it doesn't exist in the Figma file,
				// and we haven't added it already in another mode
				if (!variable && !variableInPayload) {
					postVariablesPayload.variables?.push({
						action: 'CREATE',
						id: variableId,
						name: tokenName,
						variableCollectionId,
						resolvedType: token.resolvedType,
						...differences,
					});
				} else if (variable && Object.keys(differences).length > 0) {
					if (variable.remote) {
						throw new Error(
							`Cannot update remote variable "${variable.name}" in collection "${collectionName}"`,
						);
					}

					postVariablesPayload.variables?.push({
						action: 'UPDATE',
						id: variableId,
						...differences,
					});
				}

				const existingVariableValue =
					variable && variableMode ? variable.valuesByMode[modeId] : null;
				const newVariableValue = variableValueFromToken(token, localVariablesByCollectionAndName);

				// Only include the variable mode value in the payload if it's different from the existing value
				if (
					existingVariableValue === null ||
					!compareVariableValues(existingVariableValue, newVariableValue)
				) {
					postVariablesPayload.variableModeValues?.push({
						variableId,
						modeId,
						value: newVariableValue,
					});
				}
			}
		}
	}
	return postVariablesPayload;
};

export { generatePostVariablesPayload };
