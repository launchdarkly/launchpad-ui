import type { Ref } from 'react';
import type { GroupProps as AriaGroupProps, ContextValue } from 'react-aria-components';
import type { InputVariants } from './Input';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Group as AriaGroup, composeRenderProps } from 'react-aria-components';

import { input } from './Input';
import styles from './styles/Group.module.css';
import { useLPContextProps } from './utils';

const group = cva(styles.group);

interface GroupProps extends AriaGroupProps, InputVariants {
	ref?: Ref<HTMLDivElement>;
}

const GroupContext = createContext<ContextValue<GroupProps, HTMLDivElement>>(null);

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * https://react-spectrum.adobe.com/react-aria/Group.html
 */
const Group = ({ ref, ...props }: GroupProps) => {
	[props, ref] = useLPContextProps(props, ref, GroupContext);
	const { variant = 'default' } = props;

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

export { Group, GroupContext };
export type { GroupProps };
