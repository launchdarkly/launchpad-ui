import type { ChipProps } from '@launchpad-ui/chip';
import type { MouseEvent } from 'react';
type NavItemProps = {
    to: string | {
        pathname: string;
        search: string;
    };
    name: string;
    end?: boolean;
    onClick?(event: MouseEvent): void;
    activeClassName?: string;
    status?: ChipProps['kind'];
    id?: string;
    role?: string;
    'data-test-id'?: string;
};
declare const NavItem: ({ to, name, onClick, status, role, end, "data-test-id": testId, ...other }: NavItemProps) => JSX.Element;
export { NavItem };
export type { NavItemProps };
//# sourceMappingURL=NavItem.d.ts.map