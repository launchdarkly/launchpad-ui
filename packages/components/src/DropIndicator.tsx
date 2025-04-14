import type { Ref } from 'react';
import type { DropIndicatorProps as AriaDropIndicatorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { DropIndicator as AriaDropIndicator, composeRenderProps } from 'react-aria-components';

import styles from './styles/DropIndicator.module.css';

const dropIndicatorStyles = cva(styles.indicator);

interface DropIndicatorProps extends AriaDropIndicatorProps {
	ref?: Ref<HTMLElement>;
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
				dropIndicatorStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { DropIndicator, dropIndicatorStyles };
export type { DropIndicatorProps };
