import type { PolymorphicButtonProps } from './types';
import type React from 'react';

import { cloneElement, forwardRef, memo } from 'react';

import { BaseButton } from './BaseButton';
import './styles/Button.css';
import { ButtonKind, ButtonSize, IconButtonSize } from './types';

type BaseProps = {
  kind?: ButtonKind;
  icon: React.ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
  size?: IconButtonSize;
  disabled?: boolean;
  'aria-label': string;
};

type IconButtonProps = PolymorphicButtonProps<BaseProps>;

const IconButtonComponent = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    const { kind = ButtonKind.MINIMAL, size = IconButtonSize.NORMAL, icon, ...rest } = props;

    const clonedIcon = cloneElement(icon, {
      key: 'icon',
      size: icon.props.size || 'medium',
      'aria-hidden': true,
    });

    const sharedProps = {
      kind,
      size: ButtonSize[size.toUpperCase() as keyof typeof IconButtonSize],
      onlyIcon: true,
    };

    if (props.as === 'a') {
      return (
        <BaseButton ref={ref} {...rest} {...sharedProps}>
          {clonedIcon}
        </BaseButton>
      );
    }

    return (
      <BaseButton ref={ref} {...rest} {...sharedProps}>
        {clonedIcon}
      </BaseButton>
    );
  }
);

IconButtonComponent.displayName = 'IconButton';

const IconButton = memo(IconButtonComponent);

export { IconButton };
export type { IconButtonProps };
