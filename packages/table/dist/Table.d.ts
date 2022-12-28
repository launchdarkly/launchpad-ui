import type { TableHTMLAttributes } from 'react';
type TableProps = TableHTMLAttributes<HTMLTableElement> & {
    auto?: boolean;
    compact?: boolean;
    isResourceTable?: boolean;
    summary?: string;
    'data-test-id'?: string;
};
declare const Table: ({ auto, compact, className, children, isResourceTable, "data-test-id": testId, ...rest }: TableProps) => JSX.Element;
export { Table };
export type { TableProps };
//# sourceMappingURL=Table.d.ts.map