import type { Ref } from 'react';
import { createContext } from 'react';
import type { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components/CheckboxGroup';
import { CheckboxGroup as AriaCheckboxGroup } from 'react-aria-components/CheckboxGroup';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/CheckboxGroup.module.css';

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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, CheckboxGroupContext);
	return (
		<AriaCheckboxGroup
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				checkboxGroupStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { CheckboxGroup, CheckboxGroupContext, checkboxGroupStyles };
export type { CheckboxGroupProps };
