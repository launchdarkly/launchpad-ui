import type { ReactNode } from 'react';
type AppliedFilterButtonProps = {
    name?: ReactNode;
    className?: string;
    children: ReactNode;
    onClickFilterButton?(): void;
    'data-test-id': string;
};
declare const AppliedFilterButton: import("react").ForwardRefExoticComponent<AppliedFilterButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export type { AppliedFilterButtonProps };
export { AppliedFilterButton };
//# sourceMappingURL=AppliedFilterButton.d.ts.map