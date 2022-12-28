import type { IconProps } from '@launchpad-ui/icons';
import type { ButtonHTMLAttributes, ReactElement } from 'react';
import './styles/Button.css';
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'default' | 'primary' | 'destructive' | 'minimal' | 'close';
    icon: ReactElement<IconProps>;
    size?: 'small' | 'normal';
    'aria-label': string;
    asChild?: boolean;
    'data-test-id'?: string;
};
declare const IconButton: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: "default" | "close" | "primary" | "destructive" | "minimal" | undefined;
    icon: ReactElement<IconProps>;
    size?: "small" | "normal" | undefined;
    'aria-label': string;
    asChild?: boolean | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>>;
export { IconButton };
export type { IconButtonProps };
//# sourceMappingURL=IconButton.d.ts.map