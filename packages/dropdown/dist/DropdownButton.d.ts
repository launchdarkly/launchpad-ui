/// <reference types="react" />
import type { ButtonProps } from '@launchpad-ui/button';
type DropdownButtonProps = ButtonProps & {
    hideCaret?: boolean;
};
declare const DropdownButton: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean | undefined;
    loadingText?: string | JSX.Element | undefined;
    size?: "big" | "small" | "normal" | "tiny" | undefined;
    kind?: "link" | "default" | "close" | "primary" | "destructive" | "minimal" | undefined;
    fit?: boolean | undefined;
    disabled?: boolean | undefined;
    icon?: import("react").ReactElement<import("@launchpad-ui/icons/dist/Icon").IconProps, string | import("react").JSXElementConstructor<any>> | undefined;
    renderIconFirst?: boolean | undefined;
    asChild?: boolean | undefined;
    'data-test-id'?: string | undefined;
} & {
    hideCaret?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export { DropdownButton };
export type { DropdownButtonProps };
//# sourceMappingURL=DropdownButton.d.ts.map