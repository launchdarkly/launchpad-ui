import { cloneElement, createRef, PureComponent } from 'react';
import classNames from 'classnames';
import type { LocationDescriptor } from 'history';

// TODO: Implement tooltip
// import { Tooltip } from '@launchpad-ui/tooltip';

import './styles/Button.css';

import { ButtonKind, ButtonSize, ButtonType } from './types';

export type ButtonProps = {
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
   * Content to display when hovering over the button
   */
  // TODO: Implement tooltip
  // tooltip?: string | JSX.Element;

  /**
   * Content to display when hovering over the button
   */
  // TODO: Implement tooltip
  // tooltipOptions?: object;

  /**
   * Function to execute button is clicked
   */
  onClick?(event: React.MouseEvent): void;

  /**
   * React router location to take user to when button is clicked
   */
  to?: LocationDescriptor;

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

export class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    kind: ButtonKind.DEFAULT,
    size: ButtonSize.NORMAL,
    disabled: false,
    tooltipOptions: {},
    outlined: false,
    onClick: undefined,
    renderIconFirst: false,
  };

  rootRef = createRef<HTMLElement>();

  render() {
    const { href, target } = this.props;
    const {
      disabled,
      className,
      size,
      fit,
      kind,
      icon,
      outlined,
      type,
      children,
      isLoading,
      loadingText,
      // tooltip,
      // tooltipOptions,
      renderIconFirst,
      onKeyDown,
    } = this.props;

    const kindClass = `Button--${kind}`;
    const sizeClass = `Button--${size}`;
    const classes = classNames('Button', className, kindClass, sizeClass, {
      'Button--fit': fit,
      'Button--icon': type === 'icon',
      'Button--outlined': type === 'icon' && outlined,
      'Button--borderless': type === 'borderless',
    });

    const extraProps = {
      disabled: disabled || isLoading,
      className: classes,
      onClick: this.handleClick,
      ref: this.rootRef,
      onKeyDown: onKeyDown || this.handleKeyDown,
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

    const content = this[href || target ? 'renderAnchor' : 'renderButton'](
      extraProps,
      finalChildren
    );

    // TODO: Implement tooltip
    // if (tooltip) {
    //   return <Tooltip {...tooltipOptions} content={tooltip} target={content} />;
    // }
    return content;
  }

  renderAnchor(extraProps: object, children: React.ReactNode) {
    const {
      component,
      isLoading,
      loadingText,
      size,
      kind,
      fit,
      icon,
      outlined,
      // tooltip,
      // tooltipOptions,
      renderIconFirst,
      testId,
      ...props
    } = this.props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ButtonComponent: any = component || 'a';

    return (
      <ButtonComponent {...props} {...extraProps} role="button" data-test-id={testId}>
        {children}
      </ButtonComponent>
    );
  }

  renderButton(extraProps: object, children: React.ReactNode) {
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
      // tooltip,
      // tooltipOptions,
      renderIconFirst,
      testId,
      ...props
    } = this.props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ButtonComponent: any = component || 'button';

    return (
      <ButtonComponent
        {...props}
        {...extraProps}
        type={type && type !== ButtonType.ICON ? type : ButtonType.BUTTON}
        data-test-id={testId}
      >
        {children}
      </ButtonComponent>
    );
  }

  handleClick = (event: React.MouseEvent) => {
    const { disabled, onClick } = this.props;
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick && onClick(event);
  };

  /**
   * GOTCHA: focus only works with native dom elements: a and button. Since this
   * component can render Tooltip, Link and in fact it can render any custom react components, this
   * method is an anti-pattern.
   */
  focus = () => {
    const { current } = this.rootRef;

    if (current && !current.focus) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'Button.focus() is called on a custom class component which does not have a focus method.'
        );
      }
      return;
    }
    if (current && current.focus) {
      current.focus();
    }
  };

  getDomElement = () => this.rootRef.current;

  handleKeyDown = (event: KeyboardEvent) => {
    const { to, href, target } = this.props;
    const { current } = this.rootRef;

    const spacebarKeys = ['Spacebar', ' '];

    // if we're using a 'link' as 'button', handle 'spacebar' event for accessibility.
    // 'enter' already works by default.
    if (!!to || !!href || !!target) {
      if (spacebarKeys.includes(event.key)) {
        event.preventDefault();
        current?.click();
      }
    }
  };
}
