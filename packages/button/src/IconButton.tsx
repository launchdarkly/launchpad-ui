import type { IconProps } from '@launchpad-ui/icons';
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
  kind?: 'default' | 'primary' | 'destructive' | 'minimal' | 'close';
  shape?: 'circle' | 'square';
  icon: ReactElement<IconProps>;
  size?: 'small' | 'normal';
  'aria-label': string;
  asChild?: boolean;
  'data-test-id'?: string;
};

const IconButtonComponent = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    icon,
    children,
    className,
    size = 'normal',
    kind = 'minimal',
    shape = 'circle',
    disabled = false,
    asChild = false,
    onKeyDown,
    onClick,
    type = 'button',
    'data-test-id': testId = 'icon-button',
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
    shape && `Button--${shape}`,
    className
  );

  const clonedIcon = cloneElement(icon, {
    key: 'icon',
    size: icon.props.size || 'medium',
    'aria-hidden': true,
    className: cx(icon.props.className, 'Button-icon'),
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
      data-test-id={testId}
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
