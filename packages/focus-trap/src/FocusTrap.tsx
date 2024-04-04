import type { FocusScopeProps } from '@react-aria/focus';

import { FocusScope } from '@react-aria/focus';
import { createContext, useContext } from 'react';

type FocusTrapProps = Omit<FocusScopeProps, 'contain'>;

type FocusTrapContextType = {
	contain: boolean;
};

/**
 * @deprecated use attribute `data-react-aria-top-layer` for overlays in `@launchpad-ui/components` instead
 *
 * https://github.com/adobe/react-spectrum/discussions/6000#discussioncomment-8671656
 */
const FocusTrapContext = createContext<FocusTrapContextType>({
	contain: true,
});

const useFocusTrapContext = () => useContext(FocusTrapContext);

/**
 * @deprecated not used for overlays in `@launchpad-ui/components`
 */
const FocusTrap = (props: FocusTrapProps) => {
	const { contain } = useFocusTrapContext();

	return <FocusScope contain={contain} {...props} />;
};

export { FocusTrap, FocusTrapContext, useFocusTrapContext };
export type { FocusTrapProps, FocusTrapContextType };
