import type { SelectHTMLAttributes } from 'react';
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    'data-test-id'?: string;
};
declare const Select: ({ className, children, "data-test-id": testId, ...rest }: SelectProps) => JSX.Element;
export { Select };
export type { SelectProps };
//# sourceMappingURL=Select.d.ts.map