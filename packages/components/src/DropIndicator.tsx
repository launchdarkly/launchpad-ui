import type { ForwardedRef } from 'react';
import type { DropIndicatorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { DropIndicator as AriaDropIndicator, composeRenderProps } from 'react-aria-components';

import styles from './styles/DropIndicator.module.css';

const indicator = cva(styles.indicator);

const _DropIndicator = (props: DropIndicatorProps, ref: ForwardedRef<HTMLElement>) => {
	return (
		<AriaDropIndicator
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				indicator({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A DropIndicator is rendered between items in a collection to indicate where dropped data will be inserted.
 */
const DropIndicator = forwardRef(_DropIndicator);

export { DropIndicator };
export type { DropIndicatorProps };
