import type { RefObject } from 'react';
import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	ToggleButtonGroup as AriaToggleButtonGroup,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ToggleButtonGroup.module.css';

const group = cva(styles.group);

interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A toggle button group allows a user to toggle multiple options, with single or multiple selection.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html
 */
const ToggleButtonGroup = ({ ref, ...props }: ToggleButtonGroupProps) => {
	return (
		<AriaToggleButtonGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				group({ ...renderProps, className }),
			)}
		/>
	);
};

export { ToggleButtonGroup };
export type { ToggleButtonGroupProps };
