import type { ForwardedRef } from 'react';
import type {
  MenuProps as AriaMenuProps,
  MenuItemProps,
  MenuTriggerProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuTrigger,
  composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Menu.module.css';

type MenuProps<T> = AriaMenuProps<T>;

const menu = cva(styles.menu);
const item = cva(styles.item);

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
  props: MenuItemProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <AriaMenuItem
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        item({ ...renderProps, className })
      )}
    >
      {composeRenderProps(props.children, (children, { selectionMode, isSelected }) => (
        <>
          {selectionMode !== 'none' && isSelected && <Icon name="check" size="small" />}
          {children}
        </>
      ))}
    </AriaMenuItem>
  );
};

/**
 * A MenuItem represents an individual action in a Menu.
 */
const MenuItem = forwardRef(_MenuItem);

export { Menu, MenuItem, MenuTrigger };
export type { MenuProps, MenuItemProps, MenuTriggerProps };
