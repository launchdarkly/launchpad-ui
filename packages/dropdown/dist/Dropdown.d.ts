/// <reference types="react" />
import type { PopoverProps } from '@launchpad-ui/popover';
type DropdownState = {
    isOpen?: boolean;
};
type DropdownProps<T extends string | object | number> = PopoverProps & {
    onSelect?: (item: T, stateChanges: DropdownState) => void;
    onStateChange?: (state: DropdownState) => void;
};
declare const Dropdown: <T extends string | number | object>(props: DropdownProps<T>) => JSX.Element;
export { Dropdown };
export type { DropdownProps };
//# sourceMappingURL=Dropdown.d.ts.map