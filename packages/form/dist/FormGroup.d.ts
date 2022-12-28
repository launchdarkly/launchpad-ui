import type { HTMLAttributes } from 'react';
type FormGroupProps = HTMLAttributes<HTMLFieldSetElement> & {
    name?: string | string[];
    ignoreValidation?: boolean;
    isInvalid?: boolean;
    'data-test-id'?: string;
};
declare const FormGroup: (props: FormGroupProps) => JSX.Element;
export { FormGroup };
export type { FormGroupProps };
//# sourceMappingURL=FormGroup.d.ts.map