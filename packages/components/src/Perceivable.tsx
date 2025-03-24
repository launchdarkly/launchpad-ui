import type { KeyboardEvents, PressEvents } from '@react-types/shared';
import type { ReactNode } from 'react';

import { FocusableProvider } from '@react-aria/focus';
import { createContext } from 'react';
import { Provider } from 'react-aria-components';

interface InteractionProps extends KeyboardEvents, PressEvents {}

interface PerceivableProps {
	children: ReactNode;
}

const PerceivableContext = createContext<InteractionProps>({});

const Perceivable = ({ children }: PerceivableProps) => {
	const props = {
		onPress: undefined,
		onPressStart: undefined,
		onPressEnd: undefined,
		onPressChange: undefined,
		onPressUp: undefined,
		onKeyDown: undefined,
		onKeyUp: undefined,
		onClick: undefined,
		href: undefined,
		type: 'button',
	};

	return (
		<Provider values={[[PerceivableContext, { ...props }]]}>
			<FocusableProvider aria-disabled="true" data-lp="">
				{children}
			</FocusableProvider>
		</Provider>
	);
};

export { Perceivable, PerceivableContext };
export type { PerceivableProps };
