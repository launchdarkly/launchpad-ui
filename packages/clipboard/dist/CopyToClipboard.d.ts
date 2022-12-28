import type { TooltipProps } from '@launchpad-ui/tooltip';
import type { HTMLAttributes } from 'react';
type CopyToClipboardProps = HTMLAttributes<HTMLSpanElement> & {
    triggerAriaLabel?: string;
    customCopiedText?: string;
    text: string;
    tooltip?: string | JSX.Element;
    tooltipOptions?: Partial<TooltipProps>;
    popoverTargetClassName?: string;
    onCopy?(): void;
    asChild?: boolean;
    'data-test-id'?: string;
};
type CopyToClipboardHandleRef = {
    handleCopy: () => void;
};
declare const CopyConfirmation: () => JSX.Element;
declare const CopyToClipboard: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & {
    triggerAriaLabel?: string | undefined;
    customCopiedText?: string | undefined;
    text: string;
    tooltip?: string | JSX.Element | undefined;
    tooltipOptions?: Partial<TooltipProps> | undefined;
    popoverTargetClassName?: string | undefined;
    onCopy?(): void;
    asChild?: boolean | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<CopyToClipboardHandleRef>>;
export { CopyConfirmation, CopyToClipboard };
export type { CopyToClipboardProps, CopyToClipboardHandleRef };
//# sourceMappingURL=CopyToClipboard.d.ts.map