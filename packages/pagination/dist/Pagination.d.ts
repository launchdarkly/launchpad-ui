import type { PaginationChange } from './PaginationButton';
import type { HTMLAttributes } from 'react';
type PaginationProps = HTMLAttributes<HTMLElement> & {
    resourceName: string;
    isFirstDisabled?: boolean;
    isPrevDisabled?: boolean;
    isNextDisabled?: boolean;
    isLastDisabled?: boolean;
    onChange: (change: PaginationChange) => void;
    currentOffset: number;
    pageSize: number;
    isReady: boolean;
    totalCount: number;
    'data-test-id'?: string;
};
declare const Pagination: ({ className, resourceName, isFirstDisabled, isPrevDisabled, isNextDisabled, isLastDisabled, onChange, currentOffset, pageSize, isReady, totalCount, "aria-label": ariaLabel, "data-test-id": testId, ...rest }: PaginationProps) => JSX.Element;
export { Pagination };
export type { PaginationProps };
//# sourceMappingURL=Pagination.d.ts.map