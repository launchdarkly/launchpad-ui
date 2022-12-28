/// <reference types="react" />
type FormFieldProps = {
    isRequired: boolean;
    label?: string;
    name: string;
    htmlFor: string;
    hint?: string;
    errorMessage?: string;
    ignoreValidation?: boolean;
    isInvalid?: boolean;
    children: JSX.Element;
    className?: string;
    onBlur?: (field: string) => void;
    'data-test-id'?: string;
};
declare const FormField: ({ isRequired, label, name, htmlFor, hint, errorMessage, ignoreValidation, isInvalid, children, className, onBlur, "data-test-id": testId, }: FormFieldProps) => JSX.Element;
export type { FormFieldProps };
export { FormField };
//# sourceMappingURL=FormField.d.ts.map