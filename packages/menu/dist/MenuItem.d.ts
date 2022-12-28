import type { Icon } from '@launchpad-ui/icons';
import type { PopoverPlacement } from '@launchpad-ui/popover';
import type { ComponentPropsWithRef, ElementType, PropsWithRef, ReactElement } from 'react';
import { Tooltip } from '@launchpad-ui/tooltip';
import { Link } from 'react-router-dom';
import './styles/Menu.css';
type Merge<T, U> = Omit<T, keyof U> & U;
type PropsWithComponent<P, T extends ElementType> = P & {
    component?: T;
};
type PolymorphicPropsWithRef<P, T extends ElementType> = Merge<T extends keyof JSX.IntrinsicElements ? PropsWithRef<JSX.IntrinsicElements[T]> : ComponentPropsWithRef<T>, PropsWithComponent<P, T>>;
type MenuItemOwnProps = {
    isHighlighted?: boolean;
    icon?: typeof Icon | null;
    disabled?: boolean;
    nested?: boolean;
    groupHeader?: boolean;
    tooltip?: string | ReactElement;
    tooltipOptions?: typeof Tooltip;
    tooltipPlacement?: PopoverPlacement;
    asChild?: boolean;
    'data-test-id'?: string;
};
declare const defaultElement = "button";
type MenuItemProps<P, T extends ElementType = typeof defaultElement> = PolymorphicPropsWithRef<(MenuItemOwnProps & {
    item: P;
}) | (MenuItemOwnProps & {
    item?: undefined;
}), T>;
declare const MenuItem: <P, T extends ElementType<any> = "button">({ ...props }: MenuItemProps<P, T>) => JSX.Element;
type MenuItemLinkOwnProps = {
    disabled?: boolean;
    useHistory?: boolean;
    newTab?: boolean;
};
type MenuItemLinkProps<P, T extends ElementType = typeof Link> = Merge<Omit<MenuItemProps<P, T>, 'component' | 'item'>, MenuItemLinkOwnProps> & ({
    item?: undefined;
} | {
    item: P;
});
declare const MenuItemLink: <P, T extends ElementType<any> = import("react").ForwardRefExoticComponent<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>>>({ to, disabled, useHistory, newTab, children, ...props }: Omit<Omit<MenuItemProps<P, T>, "item" | "component">, keyof MenuItemLinkOwnProps> & MenuItemLinkOwnProps & ({
    item?: undefined;
} | {
    item: P;
})) => JSX.Element;
export { MenuItem, MenuItemLink };
export type { MenuItemProps, MenuItemLinkProps };
//# sourceMappingURL=MenuItem.d.ts.map