import type { HTMLAttributes } from 'react';
type PortalProps = HTMLAttributes<HTMLDivElement> & {
    container?: HTMLElement | null;
    'data-test-id'?: string;
};
declare const Portal: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
    container?: HTMLElement | null | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export { Portal };
export type { PortalProps };
//# sourceMappingURL=Portal.d.ts.map