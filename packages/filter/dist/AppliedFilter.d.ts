import type { FilterOption } from './FilterMenu';
import type { ChangeEvent, ReactNode } from 'react';
type AppliedFilterProps = {
    searchValue?: string;
    onSearchChange?(event: ChangeEvent<HTMLInputElement>): void;
    onClearFilter?(): void;
    searchPlaceholder?: string;
    name?: ReactNode;
    description: ReactNode;
    options: FilterOption[];
    className?: string;
    onStateChange?({ isOpen }: {
        isOpen?: boolean;
    }): void;
    onSelect?(item: FilterOption): void;
    isEmpty?: boolean;
    isLoading?: boolean;
    onClickFilterButton?(): void;
    searchAriaLabel?: string;
    'data-test-id'?: string;
};
declare const AppliedFilter: ({ searchValue, onSearchChange, searchPlaceholder, name, description, options, className, isEmpty, isLoading, onClickFilterButton, onClearFilter, searchAriaLabel, "data-test-id": testId, ...props }: AppliedFilterProps) => JSX.Element;
export type { AppliedFilterProps };
export { AppliedFilter };
//# sourceMappingURL=AppliedFilter.d.ts.map