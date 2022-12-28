import type { HTMLAttributes } from 'react';
type TableHeadProps = HTMLAttributes<HTMLTableSectionElement> & {
    'data-test-id'?: string;
};
declare const TableHead: ({ className, children, "data-test-id": testId, ...rest }: TableHeadProps) => JSX.Element;
export { TableHead };
export type { TableHeadProps };
//# sourceMappingURL=TableHead.d.ts.map