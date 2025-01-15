import type { RefObject } from 'react';
import type { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { CheckboxGroup as AriaCheckboxGroup, composeRenderProps } from 'react-aria-components';

import styles from './styles/CheckboxGroup.module.css';

const group = cva(styles.group);

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 *
 * https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html
 */
const CheckboxGroup = ({ ref, ...props }: CheckboxGroupProps) => {
	return (
		<AriaCheckboxGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				group({ ...renderProps, className }),
			)}
		/>
	);
};

export { CheckboxGroup };
export type { CheckboxGroupProps };
