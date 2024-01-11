import type { ButtonVariants } from './styles/Button.css';
import type { IconButtonVariants } from './styles/IconButton.css';
import type { IconProps } from '@launchpad-ui/icons';
import type { AriaLabelingProps } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import { variants as baseVariants } from './styles/Button.css';
import { variants } from './styles/IconButton.css';

type BaseVariants = NonNullable<ButtonVariants>;

type IconButtonProps = Omit<AriaButtonProps, 'children'> &
  Required<Pick<AriaLabelingProps, 'aria-label'>> &
  IconButtonVariants & {
    icon: IconProps['name'];
    variant?: Extract<BaseVariants['variant'], 'default' | 'primary' | 'destructive' | 'minimal'>;
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
        className={clsx(baseVariants({ size, variant }), variants({ size }), className)}
      >
        <Icon name={icon} size="small" aria-hidden />
      </AriaButton>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
export type { IconButtonProps };
