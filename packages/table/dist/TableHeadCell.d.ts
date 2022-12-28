import type { ThHTMLAttributes } from 'react';
type TableHeadCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
    defaultColWidth?: 'zero' | 'one-of-twelve' | 'two-of-twelve' | 'three-of-twelve' | 'four-of-twelve' | 'five-of-twelve' | 'six-of-twelve';
};
declare const TableHeadCell: ({ align, className, children, defaultColWidth, scope, ...rest }: TableHeadCellProps) => JSX.Element;
export { TableHeadCell };
export type { TableHeadCellProps };
//# sourceMappingURL=TableHeadCell.d.ts.map