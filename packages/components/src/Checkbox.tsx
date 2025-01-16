import type { Ref } from 'react';
import type {
	CheckboxProps as AriaCheckboxProps,
	CheckboxRenderProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { Checkbox as AriaCheckbox, composeRenderProps } from 'react-aria-components';

import styles from './styles/Checkbox.module.css';

const checkbox = cva(styles.checkbox);
const box = cva(styles.box);

const CheckboxInner = ({ isSelected, isIndeterminate }: Partial<CheckboxRenderProps>) => (
	<div className={box()}>
		{isIndeterminate ? (
			<Icon name="minus" size="small" className={styles.icon} />
		) : isSelected ? (
			<Icon name="check" size="small" className={styles.icon} />
		) : null}
	</div>
);

interface CheckboxProps extends AriaCheckboxProps {
	ref?: Ref<HTMLLabelElement>;
}

/**
 * A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.
 *
 * https://react-spectrum.adobe.com/react-aria/Checkbox.html
 */
const Checkbox = ({ ref, ...props }: CheckboxProps) => {
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
					<div className={styles.container}>
						<CheckboxInner isSelected={isSelected} isIndeterminate={isIndeterminate} />
					</div>
					{children}
				</>
			))}
		</AriaCheckbox>
	);
};

export { Checkbox, CheckboxInner, checkbox };
export type { CheckboxProps };
