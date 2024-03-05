import type { ForwardedRef } from 'react';
import type { CheckboxGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { CheckboxGroup as AriaCheckboxGroup, composeRenderProps } from 'react-aria-components';

import styles from './styles/CheckboxGroup.module.css';
import { forwardRef } from './utils';

const group = cva(styles.group);

const _CheckboxGroup = (props: CheckboxGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
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

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 *
 * https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html
 */
const CheckboxGroup = forwardRef(_CheckboxGroup);

export { CheckboxGroup };
export type { CheckboxGroupProps };
