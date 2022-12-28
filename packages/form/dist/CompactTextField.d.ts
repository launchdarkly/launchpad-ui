/// <reference types="react" />
import type { TextFieldProps } from './TextField';
type CompactTextFieldProps = TextFieldProps & {
    label: string;
    needsErrorFeedback?: boolean;
};
declare const CompactTextField: import("react").ForwardRefExoticComponent<import("react").InputHTMLAttributes<HTMLInputElement> & {
    suffix?: string | undefined;
    tiny?: boolean | undefined;
    overrideWidth?: string | undefined;
    'data-test-id'?: string | undefined;
} & {
    label: string;
    needsErrorFeedback?: boolean | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export { CompactTextField };
export type { CompactTextFieldProps };
//# sourceMappingURL=CompactTextField.d.ts.map