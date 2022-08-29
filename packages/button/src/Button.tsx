import type { ButtonKind, ButtonSize, PolymorphicButtonProps } from './types';
import type React from 'react';

import { cloneElement, forwardRef, memo } from 'react';

import { BaseButton } from './BaseButton';
import './styles/Button.css';

type BaseProps = {
  isLoading?: boolean;
  loadingText?: string | JSX.Element;
  size?: ButtonSize;
  kind?: ButtonKind;
  fit?: boolean;
  icon?: React.ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
  disabled?: boolean;
  renderIconFirst?: boolean;
};

type ButtonProps = PolymorphicButtonProps<BaseProps>;

const ButtonComponent = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      icon,
      children,
      isLoading = false,
      loadingText,
      renderIconFirst = false,
      disabled = false,
      as = 'button',
    } = props;

    const renderIcon =
      icon &&
      cloneElement(icon, {
        key: 'icon',
        size: icon.props.size || 'small',
        'aria-hidden': true,
      });

    const finalChildren = [
      renderIconFirst && renderIcon,
      isLoading && <span key="text">{loadingText || children}</span>,
      !isLoading && children && <span key="text">{children}</span>,
      !renderIconFirst && renderIcon,
      isLoading && <span key="spinner">…</span>,
    ];

    const isDisabled = disabled || isLoading;

    if (as === 'a') {
      return (
        <BaseButton ref={ref} {...props} disabled={isDisabled}>
          {finalChildren}
        </BaseButton>
      );
    }

    return (
      <BaseButton ref={ref} {...props} disabled={isDisabled}>
        {finalChildren}
      </BaseButton>
    );
  }
);

ButtonComponent.displayName = 'Button';

const Button = memo(ButtonComponent);

export { Button };
export type { ButtonProps };
