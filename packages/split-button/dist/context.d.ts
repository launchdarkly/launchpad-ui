/// <reference types="react" />
import type { ButtonProps } from '@launchpad-ui/button';
type SplitButtonContextState = {
    disabled?: boolean;
    kind?: ButtonProps['kind'];
    size?: ButtonProps['size'];
};
declare const SplitButtonContext: import("react").Context<SplitButtonContextState>;
export { SplitButtonContext };
export type { SplitButtonContextState };
//# sourceMappingURL=context.d.ts.map