import type { ButtonSize, PolymorphicButtonProps } from './types';

import { cx } from 'classix';
import { forwardRef, memo } from 'react';

import './styles/Button.css';
import { ButtonKind } from './types';

type BaseProps = {
  kind?: ButtonKind;
  size?: ButtonSize;
  fit?: boolean;
  onlyIcon?: boolean;
  disabled?: boolean;
};

type BaseButtonProps = PolymorphicButtonProps<BaseProps>;

const BaseButtonComponent = forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(
  (props: BaseButtonProps, ref) => {
    const isButton = props.as === 'button';
    const {
      as: Component = 'button',
      className,
      disabled,
      size,
      fit,
      kind = ButtonKind.DEFAULT,
      children,
      onKeyDown,
      onlyIcon,
      onClick,
      ...rest
    } = props;

    const classes = cx(
      'Button',
      `Button--${kind}`,
      disabled && 'Button--disabled',
      size && `Button--${size}`,
      fit && 'Button--fit',
      onlyIcon && 'Button--icon',
      className
    );

    const handleClick = (
      event: React.MouseEvent<HTMLAnchorElement> & React.MouseEvent<HTMLButtonElement>
    ) => {
      if (disabled) return event.preventDefault();

      onClick && onClick(event);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isButton) {
        const spacebarKeys = ['Spacebar', ' '];

        if (spacebarKeys.includes(event.key)) {
          event.preventDefault();
          const link = event.target as HTMLAnchorElement;
          link.click();
        }
      }
    };

    return (
      <Component
        className={classes}
        onClick={handleClick}
        onKeyDown={onKeyDown || handleKeyDown}
        ref={ref}
        disabled={disabled}
        // TODO: Types can be improved in BaseButton, but this is strictly internal
        {...(rest as any)}
      >
        {children}
      </Component>
    );
  }
);

BaseButtonComponent.displayName = 'BaseButton';

const BaseButton = memo(BaseButtonComponent);

export { BaseButton };
export type { BaseButtonProps };
