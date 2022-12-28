import type { MenuProps } from './Menu';
import type { ComponentPropsWithRef } from 'react';
import './styles/Menu.css';
type MenuBaseProps = ComponentPropsWithRef<'div'> & {
    isVirtual?: boolean;
    size?: MenuProps<string>['size'];
};
declare const MenuBase: import("react").ForwardRefExoticComponent<Pick<MenuBaseProps, "key" | "size" | keyof import("react").HTMLAttributes<HTMLDivElement> | "isVirtual"> & import("react").RefAttributes<HTMLDivElement>>;
export { MenuBase };
export type { MenuBaseProps };
//# sourceMappingURL=MenuBase.d.ts.map