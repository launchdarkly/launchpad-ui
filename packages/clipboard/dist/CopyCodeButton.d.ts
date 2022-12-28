import type { ButtonHTMLAttributes, ReactNode } from 'react';
type CopyCodeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    'data-test-id'?: string;
};
declare const CopyCodeButton: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export { CopyCodeButton };
export type { CopyCodeButtonProps };
//# sourceMappingURL=CopyCodeButton.d.ts.map