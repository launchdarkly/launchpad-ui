import type { Ref } from 'react';
import type { GroupProps as AriaGroupProps } from 'react-aria-components';
import type { InputVariants } from './Input';

import { cva, cx } from 'class-variance-authority';
import { Group as AriaGroup, composeRenderProps } from 'react-aria-components';

import { input } from './Input';
import styles from './styles/Group.module.css';

const group = cva(styles.group);

interface GroupProps extends AriaGroupProps, InputVariants {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * https://react-spectrum.adobe.com/react-aria/Group.html
 */
const Group = ({ variant = 'default', ref, ...props }: GroupProps) => {
	return (
		<AriaGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(input({ variant }), group({ ...renderProps, className })),
			)}
		/>
	);
};

export { Group };
export type { GroupProps };
