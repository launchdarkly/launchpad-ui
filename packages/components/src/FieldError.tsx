import type { Ref } from 'react';
import type { FieldErrorProps as AriaFieldErrorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { FieldError as AriaFieldError, composeRenderProps } from 'react-aria-components';

import styles from './styles/FieldError.module.css';

const error = cva(styles.error);

interface FieldErrorProps extends AriaFieldErrorProps {
	ref?: Ref<HTMLElement>;
}

/**
 * A FieldError displays validation errors for a form field.
 */
const FieldError = ({ ref, ...props }: FieldErrorProps) => {
	return (
		<AriaFieldError
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				error({ ...renderProps, className }),
			)}
		/>
	);
};

export { FieldError };
export type { FieldErrorProps };
