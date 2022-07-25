import cx from 'clsx';
import { cloneElement, forwardRef, memo } from 'react';

import './styles/Button.css';
import { ButtonKind, ButtonSize, ButtonType } from './types';

type ButtonProps = {
  /**
   * Text for screenreaders to use if the content of the button isn't descriptive (text)
   */
  'aria-label'?: string;

  /**
   * Component to use for the button; defaults to `button`, or `a` if `href` or `target` is provided
   */
  component?: unknown;

  /**
   * When true, this property will disable the button and show the `loadingText`
   */
  isLoading?: boolean;

  /**
   * Button text to display when `isLoading` is true
   */
  loadingText?: string | JSX.Element;

  /**
   * One of `button`, `submit`, `reset`, `icon`
   */
  type?: ButtonType;

  /**
   * One of `tiny`, `small`, `normal`, `big`
   */
  size?: ButtonSize;

  /**
   * One of `default`, `primary`, `destructive`, `link`
   */
  kind?: ButtonKind;

  /**
   * When true, the button will take up the full width of its container
   */
  fit?: boolean;

  /**
   * Url to take user to when clicking on button
   */
  href?: string;

  /**
   * Where to open a button link (target="_blank" to open in new tab)
   */
  target?: string;

  /**
   * Icon to add to the contents of the button
   */
  icon?: React.ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;

  /**
   * When true, adds an outline to icon buttons
   */
  outlined?: boolean;

  /**
   * When true, disables the button
   */
  disabled?: boolean;

  /**
   * Function to execute button is clicked
   */
  onClick?(event: React.MouseEvent): void;

  /**
   * React router compatible location to take user to when button is clicked
   */
  to?: string;

  /**
   * When true, renders the icon before the text
   */
  renderIconFirst?: boolean;

  /**
   * Custom classname(s) to add to the button
   */
  className?: string;

  /**
   * Adds the html `rel` property to the rendered dom element
   */
  rel?: string;

  /**
   * Sets the tabindex on the button
   */
  tabIndex?: number;

  /**
   * Sets the data-test-id selector on the button for tests
   */
  testId?: string;

  /**
   * Sets the `name` attribute on the dom element
   */
  name?: string;

  /**
   * Function to execute when the mouse enters the button
   */
  onMouseEnter?: () => void;

  /**
   * Function to execute when the mouse leaves the button
   */
  onMouseLeave?: () => void;
  id?: string;

  /**
   * Role when `button` is not rendered as the component
   */
  role?: string;

  /**
   * Function to execute when a keyboard key is pressed
   */
  onKeyDown?(event: React.KeyboardEvent): void;

  children?: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonComponent = forwardRef<any, ButtonProps>((props: ButtonProps, ref) => {
  const {
    className,
    size = ButtonSize.NORMAL,
    fit,
    kind = ButtonKind.DEFAULT,
    icon,
    outlined = false,
    type,
    children,
    isLoading,
    loadingText,
    renderIconFirst = false,
    onKeyDown,
    disabled = false,
    href,
    target,
    onClick = () => undefined,
    to,
  } = props;

  const kindClass = `Button--${kind}`;
  const sizeClass = `Button--${size}`;
  const classes = cx('Button', className, kindClass, sizeClass, {
    'Button--fit': fit,
    'Button--icon': type === 'icon',
    'Button--outlined': type === 'icon' && outlined,
    'Button--borderless': type === 'borderless',
  });

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick && onClick(event);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const spacebarKeys = ['Spacebar', ' '];

    // if we're using a 'link' as 'button', handle 'spacebar' event for accessibility.
    // 'enter' already works by default.
    if (!!to || !!href || !!target) {
      if (spacebarKeys.includes(event.key)) {
        event.preventDefault();
        const link = event.target as HTMLAnchorElement;
        link.click();
      }
    }
  };

  const extraProps = {
    disabled: disabled || isLoading,
    className: classes,
    onClick: handleClick,
    ref,
    onKeyDown: onKeyDown || handleKeyDown,
  };

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

  const renderAnchor = (extraProps: object, children: React.ReactNode) => {
    const {
      component,
      isLoading,
      loadingText,
      size,
      kind,
      fit,
      icon,
      outlined,
      renderIconFirst,
      testId,
      ...otherProps
    } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ButtonComponent: any = component || 'a';

    return (
      <ButtonComponent {...otherProps} {...extraProps} role="button" data-test-id={testId}>
        {children}
      </ButtonComponent>
    );
  };

  const renderButton = (extraProps: object, children: React.ReactNode) => {
    const {
      component,
      type,
      isLoading,
      loadingText,
      size,
      kind,
      fit,
      icon,
      outlined,
      renderIconFirst,
      testId,
      ...otherProps
    } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ButtonComponent: any = component || 'button';

    return (
      <ButtonComponent
        {...otherProps}
        {...extraProps}
        type={type && type !== ButtonType.ICON ? type : ButtonType.BUTTON}
        data-test-id={testId}
      >
        {children}
      </ButtonComponent>
    );
  };

  const renderFunc = href || target ? renderAnchor : renderButton;

  const content = renderFunc(extraProps, finalChildren);

  return content;
});

ButtonComponent.displayName = 'Button';

const Button = memo(ButtonComponent);

export { Button };
export type { ButtonProps };
