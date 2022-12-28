import type { ChangeEvent } from 'react';
import './styles/Menu.css';
type MenuSearchProps = {
    ariaLabel?: string;
    value?: string;
    placeholder?: string;
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    'data-test-id'?: string;
};
declare const MenuSearch: import("react").ForwardRefExoticComponent<MenuSearchProps & import("react").RefAttributes<HTMLInputElement>>;
export { MenuSearch };
export type { MenuSearchProps };
//# sourceMappingURL=MenuSearch.d.ts.map