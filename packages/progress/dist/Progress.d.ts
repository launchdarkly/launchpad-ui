/// <reference types="react" />
import type { DelayedIndicatorProps } from './DelayedIndicator';
type ProgressProps = {
    value?: number;
    size?: 'small' | 'large' | 'xLarge';
    className?: string;
    delayMs?: DelayedIndicatorProps['delayMs'];
    'data-test-id'?: string;
};
declare const Progress: ({ value, size, "data-test-id": testId, className, delayMs, }: ProgressProps) => JSX.Element;
export { Progress };
export type { ProgressProps };
//# sourceMappingURL=Progress.d.ts.map