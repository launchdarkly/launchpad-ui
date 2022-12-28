import type { ReactNode } from 'react';
type DrawerProps = {
    children?: ReactNode;
    className?: string;
    onCancel?(): void;
    'data-test-id'?: string;
    size?: 'small' | 'medium' | 'large' | 'xLarge' | 'full';
};
declare const Drawer: ({ className, children, onCancel, size, "data-test-id": testId, }: DrawerProps) => JSX.Element;
export { Drawer };
export type { DrawerProps };
//# sourceMappingURL=Drawer.d.ts.map