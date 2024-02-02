import type { ForwardedRef } from 'react';
import type { FieldErrorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { FieldError as AriaFieldError, composeRenderProps } from 'react-aria-components';

import styles from './styles/FieldError.module.css';

const error = cva(styles.error);

const _FieldError = (props: FieldErrorProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <AriaFieldError
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        error({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A FieldError displays validation errors for a form field.
 */
const FieldError = forwardRef(_FieldError);

export { FieldError };
export type { FieldErrorProps };
