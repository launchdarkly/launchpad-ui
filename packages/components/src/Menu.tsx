import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type {
  MenuProps as AriaMenuProps,
  MenuItemProps as AriaMenuItemProps,
  MenuTriggerProps,
  SubmenuTriggerProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuTrigger,
  SubmenuTrigger,
  composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Menu.module.css';

const menu = cva(styles.menu);
const item = cva(styles.item, {
  variants: {
    variant: {
      default: styles.default,
      destructive: styles.destructive,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type MenuProps<T> = AriaMenuProps<T>;
type MenuItemProps<T> = AriaMenuItemProps<T> & VariantProps<typeof item>;

const _Menu = <T extends object>(
  { className, ...props }: MenuProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return <AriaMenu {...props} ref={ref} className={menu({ className })} />;
};

/**
 * A menu displays a list of actions or options that a user can choose.
 *
 * https://react-spectrum.adobe.com/react-aria/Menu.html
 */
const Menu = forwardRef(_Menu);

const _MenuItem = <T extends object>(
  { variant = 'default', ...props }: MenuItemProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <AriaMenuItem
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        item({ ...renderProps, variant, className })
      )}
    >
      {composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => (
        <>
          {selectionMode !== 'none' && (
            <span className={styles.check}>{isSelected && <Icon name="check" size="small" />}</span>
          )}
          {children}
          {hasSubmenu && <Icon name="chevron-right" size="small" className={styles.submenu} />}
        </>
      ))}
    </AriaMenuItem>
  );
};

/**
 * A MenuItem represents an individual action in a Menu.
 */
const MenuItem = forwardRef(_MenuItem);

export { Menu, MenuItem, MenuTrigger, SubmenuTrigger };
export type { MenuProps, MenuItemProps, MenuTriggerProps, SubmenuTriggerProps };
