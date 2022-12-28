import type { FilterOption } from './FilterMenu';
import type { MenuProps } from '@launchpad-ui/menu';
import type { ChangeEvent, ReactNode } from 'react';
type FilterProps = Pick<MenuProps<string>, 'size' | 'enableVirtualization'> & {
    searchValue?: string;
    onSearchChange?(event: ChangeEvent<HTMLInputElement>): void;
    searchPlaceholder?: string;
    searchAriaLabel?: string;
    name: ReactNode;
    hideName?: boolean;
    description: ReactNode;
    options: FilterOption[];
    isClearable?: boolean;
    onClear?(): void;
    className?: string;
    onStateChange?({ isOpen }: {
        isOpen?: boolean;
    }): void;
    isSelected?: boolean;
    onSelect?(item: FilterOption): void;
    isEmpty?: boolean;
    isLoading?: boolean;
    onClickFilterButton?(): void;
    disabledOptionTooltip?: string;
    'data-test-id'?: string;
    triggerTestId?: string;
};
declare const Filter: ({ searchValue, onSearchChange, searchPlaceholder, searchAriaLabel, name, hideName, description, options, isClearable, onClear, isSelected, className, isEmpty, isLoading, onClickFilterButton, disabledOptionTooltip, "data-test-id": testId, size, enableVirtualization, ...props }: FilterProps) => JSX.Element;
export { Filter };
export type { FilterProps };
//# sourceMappingURL=Filter.d.ts.map