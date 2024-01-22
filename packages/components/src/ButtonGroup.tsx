import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { ButtonContext } from 'react-aria-components';

import styles from './styles/ButtonGroup.module.css';

const buttonGroup = cva(styles.base, {
  variants: {
    spacing: {
      basic: styles.basic,
      compact: styles.compact,
      large: styles.large,
    },
  },
  defaultVariants: {
    spacing: 'basic',
  },
});

type ButtonGroupProps = ComponentPropsWithRef<'div'> &
  VariantProps<typeof buttonGroup> & {
    isDisabled?: boolean;
  };

const _ButtonGroup = (
  { children, className, spacing = 'basic', isDisabled, ...props }: ButtonGroupProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div {...props} ref={ref} className={buttonGroup({ spacing, className })}>
      <ButtonContext.Provider value={{ isDisabled }}>{children}</ButtonContext.Provider>
    </div>
  );
};

const ButtonGroup = forwardRef(_ButtonGroup);

export { ButtonGroup };
export type { ButtonGroupProps };
