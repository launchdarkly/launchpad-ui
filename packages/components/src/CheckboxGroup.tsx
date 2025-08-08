import type { Ref } from 'react';
import type {
	CheckboxGroupProps as AriaCheckboxGroupProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { CheckboxGroup as AriaCheckboxGroup, composeRenderProps } from 'react-aria-components';

import styles from './styles/CheckboxGroup.module.css';
import { useLPContextProps } from './utils';

const checkboxGroupStyles = cva(styles.group);

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
	ref?: Ref<HTMLDivElement>;
}

const CheckboxGroupContext = createContext<ContextValue<CheckboxGroupProps, HTMLDivElement>>(null);

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 *
 * https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html
 */
const CheckboxGroup = ({ ref, ...props }: CheckboxGroupProps) => {
	[props, ref] = useLPContextProps(props, ref, CheckboxGroupContext, 'CheckboxGroup');
	return (
		<AriaCheckboxGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				checkboxGroupStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { CheckboxGroup, CheckboxGroupContext, checkboxGroupStyles };
export type { CheckboxGroupProps };
