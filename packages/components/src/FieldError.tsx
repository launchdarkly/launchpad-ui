import type { Ref } from 'react';
import type { FieldErrorProps as AriaFieldErrorProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { FieldError as AriaFieldError, composeRenderProps } from 'react-aria-components';

import styles from './styles/FieldError.module.css';
import { useLPContextProps } from './utils';

const fieldErrorStyles = cva(styles.error);

interface FieldErrorProps extends AriaFieldErrorProps {
	ref?: Ref<HTMLElement>;
}

const FieldErrorContext = createContext<ContextValue<FieldErrorProps, HTMLElement>>(null);

/**
 * A FieldError displays validation errors for a form field.
 */
const FieldError = ({ ref, ...props }: FieldErrorProps) => {
	[props, ref] = useLPContextProps(props, ref, FieldErrorContext, 'FieldError');
	return (
		<AriaFieldError
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				fieldErrorStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { FieldError, FieldErrorContext, fieldErrorStyles };
export type { FieldErrorProps };
