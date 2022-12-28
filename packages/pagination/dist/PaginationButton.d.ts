/// <reference types="react" />
type PaginationChange = 'first' | 'prev' | 'next' | 'last';
type PaginationButtonProps<T = PaginationChange> = {
    resourceName: string;
    kind: PaginationChange;
    disabled: boolean;
    onClick: (change: T) => void;
    className?: string;
    'data-test-id'?: string;
};
declare const PaginationButton: ({ resourceName, kind, disabled, onClick, className, "data-test-id": testId, }: PaginationButtonProps) => JSX.Element;
export { PaginationButton };
export type { PaginationButtonProps, PaginationChange };
//# sourceMappingURL=PaginationButton.d.ts.map