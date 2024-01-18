import type { ButtonVariants } from './Button';
import type { IconProps } from '@launchpad-ui/icons';
import type { AriaLabelingProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import { button } from './Button';
import styles from './styles/IconButton.module.css';

const iconButton = cva(styles.base, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type IconButtonProps = Omit<AriaButtonProps, 'children'> &
  Required<Pick<AriaLabelingProps, 'aria-label'>> &
  VariantProps<typeof iconButton> & {
    icon: IconProps['name'];
    variant?: Extract<ButtonVariants['variant'], 'default' | 'primary' | 'destructive' | 'minimal'>;
  };

const IconButton = forwardRef(
  (
    { size = 'medium', variant = 'default', className, icon, ...props }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <AriaButton
        {...props}
        ref={ref}
        className={cx(button({ size, variant }), iconButton({ size, className }))}
      >
        <Icon name={icon} size="small" aria-hidden />
      </AriaButton>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
export type { IconButtonProps };
