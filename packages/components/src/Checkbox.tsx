import type { ForwardedRef } from 'react';
import type { CheckboxProps, CheckboxRenderProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Checkbox as AriaCheckbox, composeRenderProps } from 'react-aria-components';

import styles from './styles/Checkbox.module.css';

const checkbox = cva(styles.checkbox);
const box = cva(styles.box);

interface CheckboxInnerProps
	extends Partial<CheckboxRenderProps>,
		Pick<CheckboxProps, 'className'> {}

const CheckboxInner = ({ className, isSelected, isIndeterminate }: CheckboxInnerProps) => (
	<div className={box({ className })}>
		{isIndeterminate ? (
			<Icon name="minus" size="small" className={styles.icon} />
		) : isSelected ? (
			<Icon name="check" size="small" className={styles.icon} />
		) : null}
	</div>
);

const _Checkbox = (props: CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) => {
	return (
		<AriaCheckbox
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				checkbox({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected, isIndeterminate }) => (
				<>
					<CheckboxInner isSelected={isSelected} isIndeterminate={isIndeterminate} />
					{children}
				</>
			))}
		</AriaCheckbox>
	);
};

/**
 * A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.
 *
 * https://react-spectrum.adobe.com/react-aria/Checkbox.html
 */
const Checkbox = forwardRef(_Checkbox);

export { Checkbox, CheckboxInner, checkbox };
export type { CheckboxProps };
