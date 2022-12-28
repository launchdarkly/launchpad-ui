import type { InputHTMLAttributes } from 'react';
type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    suffix?: string;
    tiny?: boolean;
    overrideWidth?: string;
    'data-test-id'?: string;
};
declare const TextField: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    suffix?: string | undefined;
    tiny?: boolean | undefined;
    overrideWidth?: string | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export { TextField };
export type { TextFieldProps };
//# sourceMappingURL=TextField.d.ts.map