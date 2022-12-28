import type { SeparatorProps } from '@react-aria/separator';
import type { RefObject } from 'react';
import './styles/Menu.css';
type MenuDividerProps = SeparatorProps & {
    innerRef?: RefObject<HTMLDivElement>;
    'data-test-id'?: string;
};
declare const MenuDivider: ({ elementType, orientation, innerRef, "data-test-id": testId, }: MenuDividerProps) => JSX.Element;
export { MenuDivider };
export type { MenuDividerProps };
//# sourceMappingURL=MenuDivider.d.ts.map