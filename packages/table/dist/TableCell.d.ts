import type { TdHTMLAttributes } from 'react';
type TableCellWithHeadersProps = {
    headers: string;
} & TdHTMLAttributes<HTMLTableCellElement>;
type TableCellWithDirectScopeProps = {
    scope: 'row' | 'col';
} & TdHTMLAttributes<HTMLTableCellElement>;
type TableCellWithScopedProps = {
    hasScope: boolean;
} & TdHTMLAttributes<HTMLTableCellElement>;
type TableCellWithScopeProps = TableCellWithDirectScopeProps | TableCellWithScopedProps;
type TableCellProps = TableCellWithHeadersProps | TableCellWithScopeProps | (TableCellWithHeadersProps & TableCellWithScopeProps);
declare const TableCell: ({ align, className, children, ...rest }: TableCellProps) => JSX.Element;
export { TableCell };
export type { TableCellProps };
//# sourceMappingURL=TableCell.d.ts.map