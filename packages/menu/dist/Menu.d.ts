import type { FocusManager } from '@react-aria/focus';
import type { ReactElement, ReactNode } from 'react';
type ControlledMenuProps<T> = {
    children: ReactNode;
    onSelect?: (item: T) => void;
    /**
     * Menus items are rendered using react-virtual for
     * additional rendering performance.
     */
    enableVirtualization?: boolean;
    /**
     * Class name to be applied to all MenuItem and MenuItemLink components
     * in the menu.
     */
    menuItemClassName?: string;
    /**
     * Sets the width of the menu. This is especially useful when using virtual items
     * since the width cannot be automatically set by the widest element.
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Sets the number out of elements rendered outside of the view window
     * when using virtualization
     */
    overscan?: number;
    /**
     * Sets the height for each menu item when using virtualization.
     *
     */
    itemHeight?: number;
    'data-test-id'?: string;
};
type MenuProps<T extends number | string> = ControlledMenuProps<T>;
declare const Menu: <T extends string | number>(props: MenuProps<T>) => JSX.Element;
type ItemVirtualizerProps<T> = Omit<ControlledMenuProps<T>, 'children'> & {
    items: ReactElement[] | null;
    searchElement?: ReactElement | null;
    focusManager: FocusManager;
};
declare const ItemVirtualizer: <T extends string | number>(props: ItemVirtualizerProps<T>) => JSX.Element;
export { Menu, ItemVirtualizer };
export type { MenuProps, ItemVirtualizerProps };
//# sourceMappingURL=Menu.d.ts.map