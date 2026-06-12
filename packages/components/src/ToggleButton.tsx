import type { Ref } from 'react';
import type { ContextValue } from 'react-aria-components/slots';
import type { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components/ToggleButton';
import type { ButtonVariants } from './Button';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { ToggleButton as AriaToggleButton } from 'react-aria-components/ToggleButton';

import { buttonStyles } from './Button';
import elevatedStyles from './styles/ToggleButton.module.css';
import { useLPContextProps } from './utils';

const toggleButtonElevatedStyles = cva(elevatedStyles.elevated);

interface ToggleButtonProps extends AriaToggleButtonProps, ButtonVariants {
	/** Visual appearance of the toggle button. Use `"elevated"` inside a `ToggleButtonGroup` with `appearance="elevated"`. */
	appearance?: 'default' | 'elevated';
	ref?: Ref<HTMLButtonElement>;
}

const ToggleButtonContext = createContext<ContextValue<ToggleButtonProps, HTMLButtonElement>>(null);

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleButton = ({ ref, ...props }: ToggleButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, ToggleButtonContext);
	const { appearance = 'default', size = 'medium', variant = 'default' } = props;

	return (
		<AriaToggleButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				appearance === 'elevated'
					? toggleButtonElevatedStyles({ ...renderProps, className })
					: buttonStyles({ ...renderProps, size, variant, className }),
			)}
		/>
	);
};

export { ToggleButton, ToggleButtonContext, toggleButtonElevatedStyles };
export type { ToggleButtonProps };
