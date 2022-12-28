import type { HTMLAttributes, ReactNode } from 'react';
type AlertProps = HTMLAttributes<HTMLDivElement> & {
    'data-test-id'?: string;
    /**
     * When true, shows the compact Alert variant,
     * width of Alert fits content.
     */
    compact?: boolean;
    /**
     * When true, shows Alert without background/border colors.
     */
    isInline?: boolean;
    /**
     * Passing in one of `info`, `success`, `warning`, `error`
     * displays the style and icon pair associated with the variant.
     * The default is info.
     */
    kind?: 'info' | 'success' | 'warning' | 'error';
    /**
     * Passing in one of `small`, `medium`
     * displays either a small or medium Alert.
     * The default is medium.
     */
    size?: 'small' | 'medium';
    /**
     * When true, shows the wide Alert variant, adds top margin,
     * sets width to 86% (why?).
     */
    wide?: boolean;
    /**
     * When true, shows the close button. When button is clicked, the Alert
     * is removed.
     */
    dismissible?: boolean;
    /**
     * Function fired on click of close button.
     */
    onDismiss?(): void;
    /**
     * When true no icon is rendered
     */
    noIcon?: boolean;
    header?: ReactNode;
};
declare const Alert: ({ children, className, compact, isInline, kind, size, wide, dismissible, onDismiss, noIcon, header, "data-test-id": testId, ...rest }: AlertProps) => JSX.Element | null;
export { Alert };
export type { AlertProps };
//# sourceMappingURL=Alert.d.ts.map