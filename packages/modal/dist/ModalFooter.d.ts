import type { HTMLAttributes, ReactNode } from 'react';
type ModalFooterProps = HTMLAttributes<HTMLDivElement> & {
    primaryButton?: ReactNode;
    secondaryButton?: ReactNode;
    'data-test-id'?: string;
};
declare const ModalFooter: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
    primaryButton?: ReactNode;
    secondaryButton?: ReactNode;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export { ModalFooter };
export type { ModalFooterProps };
//# sourceMappingURL=ModalFooter.d.ts.map