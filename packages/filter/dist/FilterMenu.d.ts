import type { MenuProps } from '@launchpad-ui/menu';
import type { ChangeEvent, ReactNode } from 'react';
type FilterOption<T = any> = {
    name?: ReactNode;
    isDisabled?: boolean;
    isDivider?: boolean;
    isChecked?: boolean;
    value: T | null;
    projKey?: string;
    nested?: boolean;
    groupHeader?: boolean;
};
type FilterMenuProps = Pick<MenuProps<string>, 'enableVirtualization' | 'size' | 'data-test-id'> & {
    options: FilterOption[];
    onClearFilter?(): void;
    enableSearch?: boolean;
    searchValue?: string;
    searchPlaceholder?: string;
    searchAriaLabel?: string;
    onSearchChange?(event: ChangeEvent<HTMLInputElement>): void;
    onSelect?(): void;
    isLoading?: boolean;
    disabledOptionTooltip?: string;
};
declare const FilterMenu: ({ options, onClearFilter, enableSearch, searchValue, searchPlaceholder, searchAriaLabel, onSelect, onSearchChange, isLoading, disabledOptionTooltip, enableVirtualization, size, "data-test-id": testId, }: FilterMenuProps) => JSX.Element;
export { FilterMenu };
export type { FilterOption, FilterMenuProps };
//# sourceMappingURL=FilterMenu.d.ts.map