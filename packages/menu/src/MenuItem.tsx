import type { PopoverPlacement } from '@launchpad-ui/popover';

import { Icon, IconSize } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { FocusRing, useFocusManager } from '@react-aria/focus';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './styles.css';
import { chainEventHandlers } from './utils';

// Merge two types and get rid of overlapping definitions
type Merge<T, U> = Omit<T, keyof U> & U;

type PropsWithComponent<P, T extends React.ElementType> = P & { component?: T };

type PolymorphicPropsWithRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithRef<T>,
  PropsWithComponent<P, T>
>;

type MenuItemOwnProps = {
  isHighlighted?: boolean;
  icon?: typeof Icon | null;
  disabled?: boolean;
  nested?: boolean;
  groupHeader?: boolean;
  innerRef?: React.RefObject<HTMLDivElement>;
  tooltip?: string | React.ReactElement;
  tooltipOptions?: typeof Tooltip;
  tooltipPlacement?: PopoverPlacement;
};

const defaultElement = 'button';

type MenuItemProps<
  P,
  T extends React.ElementType = typeof defaultElement
> = PolymorphicPropsWithRef<
  | (MenuItemOwnProps & {
      item: P; // Infer the type if it is included
    })
  | (MenuItemOwnProps & {
      item?: undefined;
    }),
  T
>;

const MenuItem = <P, T extends React.ElementType = typeof defaultElement>({
  ...props
}: MenuItemProps<P, T>) => {
  const focusManager = useFocusManager();

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e?.preventDefault();
        focusManager.focusNext({ wrap: true });
        break;
      case 'ArrowUp':
        e?.preventDefault();
        focusManager.focusPrevious({ wrap: true });
        break;
      default:
        break;
    }
  };

  const {
    component,
    children,
    isHighlighted,
    icon: Icon,
    nested,
    groupHeader,
    item,
    disabled,
    className,
    innerRef,
    tooltip,
    role = 'menuitem',
    tooltipPlacement,
    onKeyDown,
    tooltipOptions,
    ...rest
  } = props;

  const Component: React.ElementType = component || defaultElement;

  const renderedItem = (
    <FocusRing focusRingClass="has-focus">
      <Component
        {...rest}
        ref={innerRef}
        disabled={undefined}
        aria-disabled={disabled ? disabled : undefined}
        className={cx(
          'Menu-item',
          className,
          { 'is-highlighted': isHighlighted },
          { 'Menu-item--nested': nested },
          { 'u-fw-medium': groupHeader }
        )}
        role={role}
        onKeyDown={chainEventHandlers(handleOnKeyDown, onKeyDown)}
      >
        {Icon && (
          <span className="Menu-item-icon">
            <Icon size={IconSize.SMALL} />
          </span>
        )}
        {children}
      </Component>
    </FocusRing>
  );

  if (tooltip) {
    return (
      <Tooltip
        content={tooltip}
        rootElementStyle={{ display: 'block' }}
        allowBoundaryElementOverflow
        placement={tooltipPlacement ? tooltipPlacement : 'bottom'}
        {...(tooltipOptions || {})}
      >
        {renderedItem}
      </Tooltip>
    );
  }

  return renderedItem;
};

type MenuItemLinkOwnProps = {
  disabled?: boolean;
  useHistory?: boolean;
  newTab?: boolean;
};

type MenuItemLinkProps<P, T extends React.ElementType = typeof Link> =
  | Merge<Omit<MenuItemProps<P, T>, 'component' | 'item'>, MenuItemLinkOwnProps> &
      (
        | {
            item?: undefined;
          }
        | {
            item: P;
          }
      );

// By default, this is a Link component whenever useHistory is
// explicitly not false
const MenuItemLink = <P, T extends React.ElementType = typeof Link>({
  to,
  disabled = false,
  useHistory = true,
  newTab = false,
  children,
  ...props
}: MenuItemLinkProps<P, T>) => {
  const finalProps = {
    ...props,
    disabled,
    component: useHistory ? Link : ('a' as const),
    [useHistory ? 'to' : 'href']: disabled ? '' : to,
    rel: newTab ? 'noopener noreferrer' : undefined,
    target: newTab ? '_blank' : undefined,
  };

  // Ideally if this item is disabled, it should be a button rather
  // than a link https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md

  return <MenuItem {...finalProps}>{children}</MenuItem>;
};

export { MenuItem, MenuItemLink };
export type { MenuItemProps, MenuItemLinkProps };
