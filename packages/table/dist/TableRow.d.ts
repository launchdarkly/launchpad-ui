import type { HTMLProps } from 'react';
type TableRowProps = HTMLProps<HTMLTableRowElement> & {
    verticalAlign?: 'top' | 'middle' | 'bottom';
    'data-test-id'?: string;
};
declare const TableRow: ({ className, children, verticalAlign, "data-test-id": testId, ...rest }: TableRowProps) => JSX.Element;
export { TableRow };
export type { TableRowProps };
//# sourceMappingURL=TableRow.d.ts.map