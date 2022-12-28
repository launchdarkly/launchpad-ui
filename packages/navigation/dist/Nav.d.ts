import type { HTMLAttributes, Ref } from 'react';
type NavBaseProps = HTMLAttributes<HTMLElement> & {
    kind?: 'primary' | 'secondary';
    innerRef?: Ref<HTMLDivElement>;
    'data-test-id'?: string;
};
type NavProps = Omit<NavBaseProps, 'innerRef'>;
declare const Nav: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & {
    kind?: "primary" | "secondary" | undefined;
    innerRef?: Ref<HTMLDivElement> | undefined;
    'data-test-id'?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export { Nav };
export type { NavProps };
//# sourceMappingURL=Nav.d.ts.map