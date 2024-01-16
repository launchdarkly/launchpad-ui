import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import styles from './styles/Button.module.css';

const button = cva(styles.base, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
    variant: {
      default: styles.default,
      primary: styles.primary,
      destructive: styles.destructive,
      minimal: styles.minimal,
      primaryFlair: styles.primaryFlair,
      defaultFlair: styles.defaultFlair,
      minimalFlair: styles.minimalFlair,
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;
type ButtonProps = AriaButtonProps & ButtonVariants;

const Button = forwardRef(
  (
    { size = 'medium', variant = 'default', className, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <AriaButton {...props} ref={ref} className={button({ size, variant, className })} />;
  }
);

Button.displayName = 'Button';

export { Button, button };
export type { ButtonProps, ButtonVariants };
