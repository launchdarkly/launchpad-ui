import type { ReactNode, SyntheticEvent } from 'react';
type FilterButtonProps = {
    name: ReactNode;
    hideName?: boolean;
    isClearable?: boolean;
    onClear?(event: SyntheticEvent): void;
    className?: string;
    isSelected?: boolean;
    clearTooltip?: string | JSX.Element;
    children?: ReactNode;
    onClickFilterButton?(): void;
    'data-test-id'?: string;
};
declare const FilterButton: import("react").ForwardRefExoticComponent<FilterButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { FilterButton };
export type { FilterButtonProps };
//# sourceMappingURL=FilterButton.d.ts.map