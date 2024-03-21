import type { ForwardedRef } from 'react';
import type { GroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Group as AriaGroup, composeRenderProps } from 'react-aria-components';

import styles from './styles/Group.module.css';

const group = cva(styles.group);

const _Group = (props: GroupProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				group({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * https://react-spectrum.adobe.com/react-aria/Group.html
 */
const Group = forwardRef(_Group);

export { Group };
export type { GroupProps };
