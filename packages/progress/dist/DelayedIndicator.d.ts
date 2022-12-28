import type { ReactElement } from 'react';
type DelayedIndicatorProps = {
    children: ReactElement;
    delayMs?: 0 | 50 | 250 | 1000;
};
declare const DelayedIndicator: ({ children, delayMs }: DelayedIndicatorProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export { DelayedIndicator };
export type { DelayedIndicatorProps };
//# sourceMappingURL=DelayedIndicator.d.ts.map