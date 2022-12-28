/// <reference types="react" />
type PaginationTextProps = {
    currentOffset: number;
    pageSize: number;
    isReady: boolean;
    totalCount: number;
    'data-test-id'?: string;
};
declare const PaginationText: ({ currentOffset, pageSize, isReady, totalCount, "data-test-id": testId, }: PaginationTextProps) => JSX.Element;
export { PaginationText };
export type { PaginationTextProps };
//# sourceMappingURL=PaginationText.d.ts.map