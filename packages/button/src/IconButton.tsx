import type { ButtonProps } from './Button';
import type {
  ButtonHTMLAttributes,
  ElementType,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'classix';
import { isValidElement, cloneElement, forwardRef, memo } from 'react';

import './styles/Button.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: ButtonProps['kind'];
  icon: ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
  size?: 'small' | 'normal';
  'aria-label': string;
  asChild?: boolean;
};

const IconButtonComponent = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    icon,
    children,
    className,
    size = 'normal',
    kind = 'minimal',
    disabled = false,
    asChild = false,
    onKeyDown,
    onClick,
    type = 'button',
    ...rest
  } = props;

  const Component: ElementType = asChild ? Slot : 'button';

  const classes = cx(
    'IconButton',
    'Button',
    'Button--icon',
    `Button--${kind}`,
    disabled && 'Button--disabled',
    size && `Button--${size}`,
    className
  );

  const clonedIcon = cloneElement(icon, {
    key: 'icon',
    size: icon.props.size || 'medium',
    'aria-hidden': true,
  });

  const renderChildren = () => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, undefined, clonedIcon);
    }

    return clonedIcon;
  };

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
      disabled={disabled}
      onKeyDown={onKeyDown || handleKeyDown}
      type={type}
      {...rest}
    >
      {renderChildren()}
    </Component>
  );
});

IconButtonComponent.displayName = 'IconButton';

const IconButton = memo(IconButtonComponent);

export { IconButton };
export type { IconButtonProps };
