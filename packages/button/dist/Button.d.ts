import type { IconProps } from '@launchpad-ui/icons';
import type { ButtonHTMLAttributes, ReactElement } from 'react';
import './styles/Button.css';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    loadingText?: string | JSX.Element;
    size?: 'tiny' | 'small' | 'normal' | 'big';
    kind?: 'default' | 'primary' | 'destructive' | 'minimal' | 'link' | 'close';
    fit?: boolean;
    disabled?: boolean;
    icon?: ReactElement<IconProps>;
    renderIconFirst?: boolean;
    asChild?: boolean;
    'data-test-id'?: string;
};
declare const Button: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean | undefined;
    loadingText?: string | JSX.Element | undefined;
    size?: "big" | "small" | "normal" | "tiny" | undefined;
    kind?: "link" | "default" | "close" | "primary" | "destructive" | "minimal" | undefined;
    fit?: boolean | undefined;
    disabled?: boolean | undefined;
    icon?: ReactElement<IconProps, string | import("react").JSXElementConstructor<any>> | undefined;
    renderIconFirst?: boolean | undefined;
    asChild?: boolean | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>>;
export { Button };
export type { ButtonProps };
//# sourceMappingURL=Button.d.ts.map