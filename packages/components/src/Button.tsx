import type { ButtonVariants } from './styles/Button.css';
import type { ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import { base, variants } from './styles/Button.css';

type ButtonProps = AriaButtonProps & ButtonVariants;

const Button = forwardRef(
  ({ size = 'medium', className, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <AriaButton {...props} ref={ref} className={clsx(base, variants({ size }), className)} />
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
