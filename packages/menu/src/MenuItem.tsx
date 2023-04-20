import type { Icon } from '@launchpad-ui/icons';
import type { PopoverPlacement } from '@launchpad-ui/popover';
import type { ComponentPropsWithRef, ElementType, PropsWithRef, ReactElement } from 'react';

import { Tooltip } from '@launchpad-ui/tooltip';
import { Slot } from '@radix-ui/react-slot';
import { FocusRing } from '@react-aria/focus';
import { cx } from 'classix';

import './styles/Menu.css';

// Merge two types and get rid of overlapping definitions
type Merge<T, U> = Omit<T, keyof U> & U;

type PropsWithComponent<P, T extends ElementType> = P & { component?: T };

type PolymorphicPropsWithRef<P, T extends ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? PropsWithRef<JSX.IntrinsicElements[T]>
    : ComponentPropsWithRef<T>,
  PropsWithComponent<P, T>
>;

type MenuItemOwnProps = {
  isHighlighted?: boolean;
  icon?: typeof Icon | null;
  disabled?: boolean;
  nested?: boolean;
  groupHeader?: boolean;
  tooltip?: string | ReactElement;
  tooltipOptions?: typeof Tooltip;
  tooltipPlacement?: PopoverPlacement;
  asChild?: boolean;
  'data-test-id'?: string;
};

const defaultElement = 'button';

type MenuItemProps<P, T extends ElementType = typeof defaultElement> = PolymorphicPropsWithRef<
  | (MenuItemOwnProps & {
      item: P; // Infer the type if it is included
    })
  | (MenuItemOwnProps & {
      item?: undefined;
    }),
  T
>;

const MenuItem = <P, T extends ElementType = typeof defaultElement>({
  ...props
}: MenuItemProps<P, T>) => {
  const {
    // TODO: remove component prop once we migrate over to asChild format
    component,
    children,
    isHighlighted,
    icon: Icon,
    nested,
    groupHeader,
    item,
    disabled,
    className,
    tooltip,
    role = 'menuitem',
    tooltipPlacement,
    onKeyDown,
    tooltipOptions,
    asChild,
    'data-test-id': testId = 'menu-item',
    ...rest
  } = props;

  const Component: ElementType = component || (asChild ? Slot : defaultElement);

  const renderedItem = (
    <FocusRing focusRingClass="has-focus">
      <Component
        {...rest}
        disabled={disabled}
        aria-disabled={disabled ? disabled : undefined}
        className={cx(
          'Menu-item',
          className,
          isHighlighted && 'is-highlighted',
          nested && 'Menu-item--nested',
          groupHeader && 'Menu-item--header'
        )}
        data-test-id={testId}
        role={role}
        onKeyDown={onKeyDown}
      >
        {asChild ? (
          children
        ) : (
          <>
            {Icon && (
              <span className="Menu-item-icon">
                <Icon size="small" />
              </span>
            )}
            {children}
          </>
        )}
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

export { MenuItem };
export type { MenuItemProps };
