import type { LocalVariable, VariableValue } from '@figma/rest-api-spec';

interface Variable
	extends Pick<
		LocalVariable,
		'name' | 'resolvedType' | 'description' | 'hiddenFromPublishing' | 'scopes' | 'codeSyntax'
	> {
	value: VariableValue;
	collection: string;
}

export type { Variable };
