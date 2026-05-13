import type { Ref } from 'react';
import type { FieldErrorProps as AriaFieldErrorProps } from 'react-aria-components/FieldError';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { FieldError as AriaFieldError } from 'react-aria-components/FieldError';

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
	[props, ref] = useLPContextProps(props, ref, FieldErrorContext);
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
