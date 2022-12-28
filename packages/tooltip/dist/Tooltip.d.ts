import type { PopoverProps } from '@launchpad-ui/popover';
import type { ReactNode } from 'react';
type TooltipProps = Omit<PopoverProps, 'children'> & {
    className?: string;
    children?: ReactNode;
};
declare const TooltipBase: ({ className, children, targetClassName, hoverCloseDelay, "data-test-id": testId, popoverContentClassName, ...props }: TooltipProps) => JSX.Element;
declare const Tooltip: import("react").ForwardRefExoticComponent<Omit<PopoverProps, "children"> & {
    className?: string | undefined;
    children?: ReactNode;
} & import("react").RefAttributes<Element>>;
export { Tooltip, TooltipBase };
export type { TooltipProps };
//# sourceMappingURL=Tooltip.d.ts.map