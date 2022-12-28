import type { HTMLAttributes } from 'react';
type CounterProps = HTMLAttributes<HTMLSpanElement> & {
    value: number;
    subtle?: boolean;
    children?: never;
    'data-test-id'?: string;
};
declare const Counter: ({ value, className, subtle, "data-test-id": testId, ...rest }: CounterProps) => JSX.Element;
export { Counter };
export type { CounterProps };
//# sourceMappingURL=Counter.d.ts.map