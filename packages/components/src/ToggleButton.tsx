import type { Ref } from 'react';
import type {
	ToggleButtonProps as AriaToggleButtonProps,
	ContextValue,
} from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { createContext } from 'react';
import { ToggleButton as AriaToggleButton, composeRenderProps } from 'react-aria-components';

import { buttonStyles } from './Button';
import { useLPContextProps } from './utils';

interface ToggleButtonProps extends AriaToggleButtonProps, ButtonVariants {
	ref?: Ref<HTMLButtonElement>;
}

const ToggleButtonContext = createContext<ContextValue<ToggleButtonProps, HTMLButtonElement>>(null);

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleButton = ({ ref, ...props }: ToggleButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, ToggleButtonContext, 'ToggleButton');
	const { size = 'medium', variant = 'default' } = props;

	return (
		<AriaToggleButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, size, variant, className }),
			)}
		/>
	);
};

export { ToggleButton, ToggleButtonContext };
export type { ToggleButtonProps };
