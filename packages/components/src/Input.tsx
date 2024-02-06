import type { ForwardedRef } from 'react';
import type { InputProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Input as AriaInput, composeRenderProps } from 'react-aria-components';

import styles from './styles/Input.module.css';

const input = cva(styles.input);

const _Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <AriaInput
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        input({ ...renderProps, className })
      )}
    />
  );
};

const Input = forwardRef(_Input);

/**
 * An input allows a user to input text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
export { Input };
export type { InputProps };
