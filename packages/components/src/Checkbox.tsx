import type { Ref } from 'react';
import type {
	CheckboxProps as AriaCheckboxProps,
	CheckboxRenderProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Checkbox as AriaCheckbox, composeRenderProps } from 'react-aria-components';

import styles from './styles/Checkbox.module.css';
import { useLPContextProps } from './utils';

const checkboxStyles = cva(styles.checkbox);
const checkboxIconStyles = cva(styles.box);

const CheckboxIcon = ({ isSelected, isIndeterminate }: Partial<CheckboxRenderProps>) => (
	<div className={checkboxIconStyles()}>
		{isIndeterminate ? (
			<svg aria-hidden="true" className={styles.icon} viewBox="0 0 16 16">
				<path
					fillRule="evenodd"
					clipPath="evenodd"
					d="M3.5 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z"
				/>
			</svg>
		) : isSelected ? (
			<svg aria-hidden="true" className={styles.icon} viewBox="0 0 16 16">
				<path
					fillRule="evenodd"
					clipPath="evenodd"
					d="M12.581 3.686a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.665 1.665 4.314-6.04a1 1 0 0 1 1.395-.232Z"
				/>
			</svg>
		) : null}
	</div>
);

interface CheckboxProps extends AriaCheckboxProps {
	ref?: Ref<HTMLLabelElement>;
}

const CheckboxContext = createContext<ContextValue<CheckboxProps, HTMLLabelElement>>(null);

/**
 * A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.
 *
 * https://react-spectrum.adobe.com/react-aria/Checkbox.html
 */
const Checkbox = ({ ref, ...props }: CheckboxProps) => {
	[props, ref] = useLPContextProps(props, ref, CheckboxContext);
	return (
		<AriaCheckbox
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				checkboxStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected, isIndeterminate }) => (
				<>
					<div className={styles.container}>
						<CheckboxIcon isSelected={isSelected} isIndeterminate={isIndeterminate} />
					</div>
					{children}
				</>
			))}
		</AriaCheckbox>
	);
};

export { Checkbox, CheckboxContext, CheckboxIcon, checkboxIconStyles, checkboxStyles };
export type { CheckboxProps };
