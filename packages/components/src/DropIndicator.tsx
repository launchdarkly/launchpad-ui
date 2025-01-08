import type { RefObject } from 'react';
import type { DropIndicatorProps as AriaDropIndicatorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { DropIndicator as AriaDropIndicator, composeRenderProps } from 'react-aria-components';

import styles from './styles/DropIndicator.module.css';

const indicator = cva(styles.indicator);

interface DropIndicatorProps extends AriaDropIndicatorProps {
	ref?: RefObject<HTMLElement | null>;
}

/**
 * A DropIndicator is rendered between items in a collection to indicate where dropped data will be inserted.
 */
const DropIndicator = ({ ref, ...props }: DropIndicatorProps) => {
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

export { DropIndicator };
export type { DropIndicatorProps };
