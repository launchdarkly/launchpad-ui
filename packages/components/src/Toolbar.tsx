import type { ForwardedRef } from 'react';
import type { ToolbarProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Toolbar as AriaToolbar, composeRenderProps } from 'react-aria-components';

import styles from './styles/Toolbar.module.css';

const toolbar = cva(styles.toolbar);

const _Toolbar = (props: ToolbarProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaToolbar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toolbar({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A toolbar is a container for a set of interactive controls, such as buttons, dropdown menus, or checkboxes, with arrow key navigation.
 *
 * https://react-spectrum.adobe.com/react-aria/Toolbar.html
 */
const Toolbar = forwardRef(_Toolbar);

export { Toolbar };
export type { ToolbarProps };
