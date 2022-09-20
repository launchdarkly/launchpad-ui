import type {
  ButtonHTMLAttributes,
  ElementType,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'classix';
import { isValidElement, cloneElement, forwardRef, memo } from 'react';

import './styles/Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingText?: string | JSX.Element;
  size?: 'tiny' | 'small' | 'normal' | 'big';
  kind?: 'default' | 'primary' | 'destructive' | 'minimal' | 'link' | 'close';
  fit?: boolean;
  disabled?: boolean;
  icon?: ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
  renderIconFirst?: boolean;
  asChild?: boolean;
};

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    icon,
    children,
    className,
    size,
    fit,
    kind = 'default',
    isLoading = false,
    loadingText,
    renderIconFirst = false,
    disabled = false,
    asChild = false,
    onKeyDown,
    onClick,
    type = 'button',
    ...rest
  } = props;

  const Component: ElementType = asChild ? Slot : 'button';

  const classes = cx(
    'Button',
    `Button--${kind}`,
    disabled && 'Button--disabled',
    size && `Button--${size}`,
    fit && 'Button--fit',
    className
  );

  const renderIcon =
    icon &&
    cloneElement(icon, {
      key: 'icon',
      size: icon.props.size || 'small',
      'aria-hidden': true,
    });

  const getFinalChildren = (c: ReactNode) => [
    renderIconFirst && renderIcon,
    isLoading && <span key="text">{loadingText || c}</span>,
    !isLoading && c && <span key="text">{c}</span>,
    !renderIconFirst && renderIcon,
    isLoading && <span key="spinner">…</span>,
  ];

  const renderChildren = () => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, undefined, getFinalChildren(children.props.children));
    }

    return getFinalChildren(children);
  };

  const isDisabled = disabled || isLoading;

  const handleClick = (event: MouseEvent<HTMLAnchorElement> & MouseEvent<HTMLButtonElement>) => {
    if (disabled) return event.preventDefault();

    onClick && onClick(event);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.target instanceof HTMLAnchorElement) {
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
      ref={ref}
      onClick={handleClick}
      onKeyDown={onKeyDown || handleKeyDown}
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {renderChildren()}
    </Component>
  );
});

ButtonComponent.displayName = 'Button';

const Button = memo(ButtonComponent);

export { Button };
export type { ButtonProps };
