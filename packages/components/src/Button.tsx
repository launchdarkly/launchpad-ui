import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Button as AriaButton, composeRenderProps } from 'react-aria-components';

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

const _Button = (
  { size = 'medium', variant = 'default', ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <AriaButton
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, size, variant, className })
      )}
    />
  );
};

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const Button = forwardRef(_Button);

export { Button, button };
export type { ButtonProps, ButtonVariants };
