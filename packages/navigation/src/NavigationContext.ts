import type { RefObject } from 'react';

import { createContext, useContext } from 'react';

type NavigationContextModel = {
	shouldCollapse: boolean;
	refs: {
		wrapperRef: RefObject<HTMLDivElement | null>;
		itemListRef: RefObject<HTMLDivElement | null>;
	};
};

const NavigationContext = createContext<NavigationContextModel | undefined>(undefined);

const useNavigationContext = () => {
	const context = useContext(NavigationContext);

	if (context === undefined) {
		throw new Error('useNavigationContext must be used within a NavigationContext provider');
	}

	return context;
};

export { NavigationContext, useNavigationContext };
export type { NavigationContextModel };
