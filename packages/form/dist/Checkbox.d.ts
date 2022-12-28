import type { InputHTMLAttributes } from 'react';
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    /**
     * The className to pass into the Checkbox's Label component
     */
    labelClassName?: string;
    'data-test-id'?: string;
};
declare const Checkbox: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    /**
     * The className to pass into the Checkbox's Label component
     */
    labelClassName?: string | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export { Checkbox };
export type { CheckboxProps };
//# sourceMappingURL=Checkbox.d.ts.map