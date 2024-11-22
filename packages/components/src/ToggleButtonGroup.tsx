import type { ForwardedRef } from 'react';
import type { ToggleButtonGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	ToggleButtonGroup as AriaToggleButtonGroup,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ToggleButtonGroup.module.css';

const group = cva(styles.group);

const _ToggleButtonGroup = (props: ToggleButtonGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
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

/**
 * A toggle button group allows a user to toggle multiple options, with single or multiple selection.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html
 */
const ToggleButtonGroup = forwardRef(_ToggleButtonGroup);

export { ToggleButtonGroup };
export type { ToggleButtonGroupProps };
