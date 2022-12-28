/// <reference types="react" />
import type { NavProps } from './Nav';
import type { CollectionBase } from '@react-types/shared';
type NavigationListProps<T extends object> = CollectionBase<T> & {
    title: string;
    kind?: NavProps['kind'];
};
declare const NavigationList: <T extends object>({ kind, title, ...rest }: NavigationListProps<T>) => JSX.Element;
export { NavigationList };
export type { NavigationListProps };
//# sourceMappingURL=NavigationList.d.ts.map