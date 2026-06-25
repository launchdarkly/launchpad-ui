import type { ReactNode } from 'react';

import { FieldError } from './FieldError';
import { Text } from './Text';

interface FieldHelperProps {
	/** Helper text describing the field, rendered below the input. */
	description?: ReactNode;
	/** Error message shown when the field is invalid. */
	errorMessage?: ReactNode;
}

const renderFieldHelpers = (
	children: ReactNode,
	{ description, errorMessage }: FieldHelperProps,
) => (
	<>
		{children}
		{description != null && <Text slot="description">{description}</Text>}
		{errorMessage != null && <FieldError>{errorMessage}</FieldError>}
	</>
);

export { renderFieldHelpers };
export type { FieldHelperProps };
