import type { Offset, PopoverPlacement } from '@launchpad-ui/popover';
import type { MouseEvent } from 'react';
type NavItemWithTooltipProps = {
    to: string;
    name: string;
    end?: boolean;
    tooltipContent?: string | JSX.Element;
    tooltipPlacement?: PopoverPlacement;
    tooltipOffset?: Offset;
    onClick?(event: MouseEvent): void;
    id?: string;
    role?: string;
    'aria-controls'?: string;
    'data-test-id'?: string;
};
declare const NavItemWithTooltip: ({ to, name, tooltipContent, onClick, tooltipPlacement, tooltipOffset, role, end, id, "aria-controls": ariaControls, "data-test-id": testId, }: NavItemWithTooltipProps) => JSX.Element;
export { NavItemWithTooltip };
export type { NavItemWithTooltipProps };
//# sourceMappingURL=NavItemWithTooltip.d.ts.map