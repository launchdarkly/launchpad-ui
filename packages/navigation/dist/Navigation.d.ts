/// <reference types="react" />
import type { NavProps } from './Nav';
import type { CollectionBase } from '@react-types/shared';
type NavigationProps<T extends object> = CollectionBase<T> & {
    title: string;
    kind?: NavProps['kind'];
    role?: string;
    'data-test-id'?: string;
    className?: string;
};
declare const Navigation: <T extends object>(props: NavigationProps<T>) => JSX.Element;
export { Navigation };
export type { NavigationProps };
//# sourceMappingURL=Navigation.d.ts.map