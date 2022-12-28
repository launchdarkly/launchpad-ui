import type { NavItemProps } from './NavItem';
import type { NavItemWithTooltipProps } from './NavItemWithTooltip';
import type { ReactElement } from 'react';
type NavigationItemProps = NavItemProps & NavItemWithTooltipProps & {
    tooltip?: boolean | ReactElement;
};
declare const NavigationItem: {
    (_props: NavigationItemProps): null;
    getCollectionNode(props: NavigationItemProps): Generator<{
        type: string;
        props: NavigationItemProps;
        'aria-label': string;
        hasChildNodes: boolean;
    }, void, unknown>;
};
export { NavigationItem };
export type { NavigationItemProps };
//# sourceMappingURL=NavigationItem.d.ts.map