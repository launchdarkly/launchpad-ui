import type { HTMLAttributes } from 'react';
type ChipProps = HTMLAttributes<HTMLSpanElement> & {
    kind?: 'default' | 'success' | 'warning' | 'inactive' | 'info' | 'label' | 'new' | 'beta' | 'federal';
    size?: 'normal' | 'large';
    subtle?: boolean;
    'data-test-id'?: string;
};
declare const Chip: ({ kind, size, subtle, onClick, onKeyDown, className, children, "data-test-id": testId, ...rest }: ChipProps) => JSX.Element;
export { Chip };
export type { ChipProps };
//# sourceMappingURL=Chip.d.ts.map