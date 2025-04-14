import type { Ref } from 'react';
import type {
	ToggleButtonGroupProps as AriaToggleButtonGroupProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	ToggleButtonGroup as AriaToggleButtonGroup,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ToggleButtonGroup.module.css';
import { useLPContextProps } from './utils';

const toggleButtonGroupStyles = cva(styles.group);

interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps {
	ref?: Ref<HTMLDivElement>;
}

const ToggleButtonGroupContext =
	createContext<ContextValue<ToggleButtonGroupProps, HTMLDivElement>>(null);

/**
 * A toggle button group allows a user to toggle multiple options, with single or multiple selection.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html
 */
const ToggleButtonGroup = ({ ref, ...props }: ToggleButtonGroupProps) => {
	[props, ref] = useLPContextProps(props, ref, ToggleButtonGroupContext);
	return (
		<AriaToggleButtonGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toggleButtonGroupStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { ToggleButtonGroup, ToggleButtonGroupContext, toggleButtonGroupStyles };
export type { ToggleButtonGroupProps };
