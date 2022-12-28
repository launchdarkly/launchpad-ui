import type { HTMLAttributes, ReactNode } from 'react';
type BannerProps = HTMLAttributes<HTMLDivElement> & {
    'data-test-id'?: string;
    kind: 'info' | 'warning' | 'error';
    onDismiss?(): void;
    dismissible?: boolean;
    header?: ReactNode;
};
declare const Banner: ({ kind, className, children, onDismiss, dismissible, header, "data-test-id": testId, ...rest }: BannerProps) => JSX.Element;
export { Banner };
export type { BannerProps };
//# sourceMappingURL=Banner.d.ts.map