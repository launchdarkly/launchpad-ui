import type { HTMLAttributes } from 'react';
type DrawerHeaderProps = HTMLAttributes<HTMLDivElement> & {
    closeable?: boolean;
    titleID?: string;
    titleClassName?: string;
    onClose?(): void;
    'data-test-id'?: string;
};
declare const DrawerHeader: ({ className, children, titleID, titleClassName, "data-test-id": testId, ...rest }: DrawerHeaderProps) => JSX.Element;
export { DrawerHeader };
export type { DrawerHeaderProps };
//# sourceMappingURL=DrawerHeader.d.ts.map