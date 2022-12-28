/// <reference types="react" />
import type { CollectionBase } from '@react-types/shared';
type NavigationMenuDropdownProps<T extends object> = CollectionBase<T> & {
    title: string;
};
declare const NavigationMenuDropdown: <T extends object>(props: NavigationMenuDropdownProps<T>) => JSX.Element;
export { NavigationMenuDropdown };
export type { NavigationMenuDropdownProps };
//# sourceMappingURL=NavigationMenuDropdown.d.ts.map