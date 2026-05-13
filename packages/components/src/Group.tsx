import type { Ref } from 'react';
import type { GroupProps as AriaGroupProps } from 'react-aria-components/Group';
import type { ContextValue } from 'react-aria-components/slots';
import type { InputVariants } from './Input';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { Group as AriaGroup } from 'react-aria-components/Group';

import { inputStyles } from './Input';
import styles from './styles/Group.module.css';
import { useLPContextProps } from './utils';

const groupStyles = cva(styles.group);

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
				cx(inputStyles({ variant }), groupStyles({ ...renderProps, className })),
			)}
		/>
	);
};

export { Group, GroupContext, groupStyles };
export type { GroupProps };
