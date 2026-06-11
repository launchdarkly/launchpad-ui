import type { Ref } from 'react';
import type { ContextValue } from 'react-aria-components/slots';
import type { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components/ToggleButton';
import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from 'react-aria-components/ToggleButtonGroup';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { ToggleButton as AriaToggleButton } from 'react-aria-components/ToggleButton';
import { ToggleButtonGroup as AriaToggleButtonGroup } from 'react-aria-components/ToggleButtonGroup';

import styles from './styles/ToggleButtonGroupElevated.module.css';
import { useLPContextProps } from './utils';

const toggleButtonGroupElevatedStyles = cva(styles.group);
const toggleButtonElevatedStyles = cva(styles.button);

interface ToggleButtonGroupElevatedProps extends AriaToggleButtonGroupProps {
	ref?: Ref<HTMLDivElement>;
}

interface ToggleButtonElevatedProps extends AriaToggleButtonProps {
	ref?: Ref<HTMLButtonElement>;
}

const ToggleButtonGroupElevatedContext =
	createContext<ContextValue<ToggleButtonGroupElevatedProps, HTMLDivElement>>(null);

const ToggleButtonElevatedContext =
	createContext<ContextValue<ToggleButtonElevatedProps, HTMLButtonElement>>(null);

/**
 * An elevated toggle button group with a filled container background and styled buttons.
 * Behaves identically to `ToggleButtonGroup` with a distinct visual treatment.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html
 */
const ToggleButtonGroupElevated = ({ ref, ...props }: ToggleButtonGroupElevatedProps) => {
	[props, ref] = useLPContextProps(props, ref, ToggleButtonGroupElevatedContext);
	return (
		<AriaToggleButtonGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toggleButtonGroupElevatedStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A toggle button styled for use inside `ToggleButtonGroupElevated`.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleButtonElevated = ({ ref, ...props }: ToggleButtonElevatedProps) => {
	[props, ref] = useLPContextProps(props, ref, ToggleButtonElevatedContext);
	return (
		<AriaToggleButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toggleButtonElevatedStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export {
	ToggleButtonElevated,
	ToggleButtonElevatedContext,
	toggleButtonElevatedStyles,
	ToggleButtonGroupElevated,
	ToggleButtonGroupElevatedContext,
	toggleButtonGroupElevatedStyles,
};
export type { ToggleButtonElevatedProps, ToggleButtonGroupElevatedProps };
