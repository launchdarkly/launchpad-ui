import type { ReactNode } from 'react';
type ModalHeaderProps = {
    className?: string;
    withCloseButton?: boolean;
    hasRequiredField?: boolean;
    title: ReactNode;
    description?: ReactNode;
    'data-test-id'?: string;
};
declare const ModalHeader: ({ withCloseButton, title, hasRequiredField, description, className, "data-test-id": testId, }: ModalHeaderProps) => JSX.Element;
export { ModalHeader };
export type { ModalHeaderProps };
//# sourceMappingURL=ModalHeader.d.ts.map