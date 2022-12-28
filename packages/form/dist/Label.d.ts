import type { LabelHTMLAttributes } from 'react';
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
    'data-test-id'?: string;
};
declare const Label: ({ disabled, className, children, required, optional, "data-test-id": testId, ...rest }: LabelProps) => JSX.Element;
export { Label };
export type { LabelProps };
//# sourceMappingURL=Label.d.ts.map