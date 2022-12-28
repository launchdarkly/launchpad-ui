import type { RefObject } from 'react';
type NavigationContextModel = {
    shouldCollapse: boolean;
    refs: {
        wrapperRef: RefObject<HTMLDivElement>;
        itemListRef: RefObject<HTMLDivElement>;
    };
};
declare const NavigationContext: import("react").Context<NavigationContextModel | undefined>;
declare const useNavigationContext: () => NavigationContextModel;
export { NavigationContext, useNavigationContext };
export type { NavigationContextModel };
//# sourceMappingURL=NavigationContext.d.ts.map