import type { LocalVariable, VariableValue } from '@figma/rest-api-spec';

interface Variable extends Partial<LocalVariable> {
	value: VariableValue;
	collection: string;
	mode?: string;
}

export type { Variable };
