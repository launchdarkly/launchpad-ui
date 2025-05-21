import type { KeyboardEvents, PressEvents } from '@react-types/shared';
import type { ReactNode } from 'react';

import { FocusableProvider } from '@react-aria/focus';
import { ClearPressResponder } from '@react-aria/interactions';
import { createContext } from 'react';
import { Provider } from 'react-aria-components';

interface InteractionProps extends KeyboardEvents, PressEvents {}

interface PerceivableProps {
	children?: ReactNode;
	isDisabled?: boolean;
}

const PerceivableContext = createContext<InteractionProps>({});

const Perceivable = ({ children, isDisabled = true }: PerceivableProps) => {
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

	return isDisabled ? (
		<Provider values={[[PerceivableContext, { ...props }]]}>
			<FocusableProvider aria-disabled="true" data-lp="">
				<ClearPressResponder>{children}</ClearPressResponder>
			</FocusableProvider>
		</Provider>
	) : (
		children
	);
};

export { Perceivable, PerceivableContext };
export type { PerceivableProps };
