/// <reference types="react" />
import type { FocusScopeProps } from '@react-aria/focus';
type FocusTrapProps = Omit<FocusScopeProps, 'contain'>;
type FocusTrapContextType = {
    contain: boolean;
};
declare const FocusTrapContext: import("react").Context<FocusTrapContextType>;
declare const useFocusTrapContext: () => FocusTrapContextType;
declare const FocusTrap: (props: FocusTrapProps) => JSX.Element;
export { FocusTrap, FocusTrapContext, useFocusTrapContext };
export type { FocusTrapProps, FocusTrapContextType };
//# sourceMappingURL=FocusTrap.d.ts.map