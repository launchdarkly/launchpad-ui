import type { FieldPath } from './utils';
import type { HTMLAttributes } from 'react';
type FieldErrorProps = HTMLAttributes<HTMLSpanElement> & {
    name: FieldPath;
    errorMessage?: string;
    'data-test-id'?: string;
};
declare const FieldError: ({ name, errorMessage, className, "data-test-id": testId, ...rest }: FieldErrorProps) => JSX.Element | null;
export { FieldError };
export type { FieldErrorProps };
//# sourceMappingURL=FieldError.d.ts.map